import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../../users/shared/user.service';
import { tap, take } from 'rxjs/operators';
import { FeedbackService } from '../../feedback/feedback.service';
import { FeedbackMessage, FeedbackType } from '../../feedback/feedback.model';
import { finalize } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router,
    private feedbackService: FeedbackService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isAdmin.pipe(
      take(1),
      tap(isAdmin => {
        if (!isAdmin) {
          this.feedbackService.message(
            {message: FeedbackMessage.Admin, type: FeedbackType.Default}
          );
          this.router.navigate(['']);
        }
      })
    );
  }
}
