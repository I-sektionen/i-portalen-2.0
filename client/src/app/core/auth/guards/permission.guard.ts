import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../../../features/users/shared/user.service';
import {FeedbackService} from '../../feedback/feedback.service';
import {take, tap} from 'rxjs/operators';
import {FeedbackMessage, FeedbackType} from '../../feedback/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private feedbackService: FeedbackService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.hasPermission(route.data.action).pipe(
      take(1),
      tap(hasPermission => {
        if (!hasPermission) {
          this.feedbackService.message(
            {message: FeedbackMessage.Admin, type: FeedbackType.Default}
          );
          this.router.navigate(['']);
        }
      })
    );
  }
}
