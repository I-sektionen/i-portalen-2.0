import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material';
import { FeedbackConfig, FeedbackMessage, FeedbackType } from './feedback.model';
import { Observable } from 'rxjs/index';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private snackbarConfig = new MatSnackBarConfig();

  constructor(
    private snackbar: MatSnackBar,
  ) {
    this.snackbarConfig.duration = 3500;
  }

  message(config: FeedbackConfig): Observable<void> {

    // add css classes
    this.snackbarConfig.panelClass = [
      'snackbar', config.type === FeedbackType.Default ? null : config.type.toString()
    ];

    // set message
    const snackbarMessage = config.message === FeedbackMessage.Custom ? config.customMessage : config.message.toString();

    // open
    return this.snackbar.open(snackbarMessage, config.actionText, this.snackbarConfig).onAction();
  }
}
