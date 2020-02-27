import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import {MatDialog} from '@angular/material';
import {UserProfileComponent} from "../../features/users/user-profile/user-profile.component";
import { NavigationEnd, Router } from '@angular/router';
import { filter, share } from 'rxjs/operators';
import { UserService } from '../../features/users/shared/user.service';
import {Permissions} from '../auth/permissions.enum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isMobile: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    share(),
  );

  isLoggedIn: Observable<boolean>;
  isAdmin: Observable<boolean>;
  isAdminPage: Observable<boolean>;
  editText: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.editText = this.userService.hasPermission(Permissions.Edit_Texts);
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isAdmin = this.userService.hasPermission(Permissions.Open_Admin_Interface);
    this.isAdminPage = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.urlAfterRedirects.indexOf('admin') !== -1),
      share()
    );
  }

  logout() {
    this.authService.logout();
  }

  openProfile(): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      width: 'flex',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
