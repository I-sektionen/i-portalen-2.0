import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {AuthService} from '../auth/auth.service';
import {NotificationsModel, UserData} from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  userPath = 'users';
  notificationTimestampField = 'timestamp';
  constructor(
    private databaseServiceNotificationsModel: DatabaseService<NotificationsModel>,
    private databaseServiceUserData: DatabaseService<UserData>,
    private databaseServiceNewNotification: DatabaseService<{newNotifications: boolean}>,
    private authService: AuthService
  ) { }

  listNotifications() {
    const userNotificationPath = 'users/' + this.authService.uid + '/notifications';

      return this.databaseServiceNotificationsModel
        .list(userNotificationPath, ref => {

        return ref.orderBy(this.notificationTimestampField, 'desc').limit(20);
      });
    }
    getUserData() {
    return this.databaseServiceUserData.get(this.userPath, this.authService.uid);
    }
   setNewNotificationsToFalse() {
    this.databaseServiceNewNotification.update(this.userPath, this.authService.uid, {newNotifications: false});
}
  }

