import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { FeedbackMessage, FeedbackType } from '../../feedback/feedback.model';
import { FeedbackService } from '../../feedback/feedback.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private feedbackService: FeedbackService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn.pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.feedbackService.message(
            {message: FeedbackMessage.DefaultError, type: FeedbackType.Error}
          );
        }
      })
    );
  }
}
