import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {AuthService} from '../auth/auth.service';
import {NotificationsModel} from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(
    private databaseService: DatabaseService<NotificationsModel>,
    private authService: AuthService
  ) { }

  listNotifications() {
      return this.databaseService.list('users/' + this.authService.uid + '/notifications');
    }
  }

