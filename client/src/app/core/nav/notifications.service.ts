import { Injectable } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {AuthService} from '../auth/auth.service';
import {NotificationsModel} from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private readonly path = 'users/IELYXV7MNIWivHrLO470DlYPHdJ3/notifications'

  constructor(
    private databaseService: DatabaseService<NotificationsModel>,
    private authService: AuthService
  ) { }

  listQuestions() {
    return this.databaseService.list(this.path);
  }
}


