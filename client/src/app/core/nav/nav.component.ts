import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import {MatDialog} from '@angular/material';
import {UserProfileComponent} from "../../users/user-profile/user-profile.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isMobile: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isLoggedIn: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }

  openProfile(): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      width: '480px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
    //^^ Can be used to react to dialog exit
  }
}
