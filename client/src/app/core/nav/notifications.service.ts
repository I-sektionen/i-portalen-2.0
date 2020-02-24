import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {AuthService} from '../auth/auth.service';
import {NewNotification, NotificationsModel, UserData} from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(
    private databaseService: DatabaseService<NotificationsModel>,
    private databaseService2: DatabaseService<UserData>,
    private databaseService3: DatabaseService<(NewNotification)>,
    private authService: AuthService
  ) { }

  listNotifications() {
      return this.databaseService.list('users/' + this.authService.uid + '/notifications');
    }
    getUserData() {
    return this.databaseService2.get('users', this.authService.uid);
    }
   setNewNotificationsToFalse() {
    this.databaseService3.update('users', this.authService.uid, {newNotifications: false});
}
  }

