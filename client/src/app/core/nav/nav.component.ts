import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import {MatDialog} from '@angular/material';
import {UserProfileComponent} from '../../features/users/user-profile/user-profile.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter, share } from 'rxjs/operators';
import { UserService } from '../../features/users/shared/user.service';
import {NotificationsService} from './notifications.service';
import {NotificationsModel} from './notifications.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  notifications: NotificationsModel[] = [];
  newNotifications = false;
  notificationIcon = 'notification';

  isMobile: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    share(),
  );
  isLoggedIn: Observable<boolean>;
  isAdmin: Observable<boolean>;
  isAdminPage: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isAdmin = this.userService.isAdmin;
    this.isAdminPage = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.urlAfterRedirects.indexOf('admin') !== -1),
      share()
    );
    this.getNotifications();
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
  getNotifications() {
    this.authService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn === true) {
        this.notificationsService.listNotifications().subscribe((notifications: NotificationsModel[]) => {
          this.notifications = notifications;
        });
        this.notificationsService.getUserData().subscribe(newNotifications => {
          if (newNotifications.newNotifications) {
            this.notificationIcon = 'notifications_active';
            this.newNotifications = true;
          } else {
            this.notificationIcon = 'notifications';
            this.newNotifications = false;
          }
        });
      }
    });
  }
  setNewNotificationsToFalse() {
    if (this.newNotifications === true) {
      this.notificationsService.setNewNotificationsToFalse();
    }
  }
}
