import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {AuthService} from '../auth/auth.service';
import {NotificationsModel, UserData} from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(
    private databaseServiceNotificationsModel: DatabaseService<NotificationsModel>,
    private databaseServiceUserData: DatabaseService<UserData>,
    private databaseServiceNewNotification: DatabaseService<{newNotification: boolean}>,
    private authService: AuthService
  ) { }

  listNotifications() {
      return this.databaseServiceNotificationsModel.list('users/' + this.authService.uid + '/notifications');
    }
    getUserData() {
    return this.databaseServiceUserData.get('users', this.authService.uid);
    }
   setNewNotificationsToFalse() {
    this.databaseServiceNewNotification.update('users', this.authService.uid, {newNotification: false});
}
  }

