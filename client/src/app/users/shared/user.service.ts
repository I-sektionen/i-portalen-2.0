import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { DatabaseService } from '../../core/database/database.service';
import { AuthService } from '../../core/auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly path = 'users';

  private userObservable: Observable<User>;

  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService<User>,
  ) {
    this.setUser();
  }

  get user() {
    return this.userObservable;
  }

  get uid() {
    return this.authService.uid;
  }

  setUser() {
    this.userObservable = this.authService.authUser.pipe(
      switchMap(authUser => {
        if (authUser) {
          return this.databaseService.get(this.path, authUser.uid);
        } else {
          return of(null);
        }
      })
    );
  }

  updateUser(user: User) {
    return this.databaseService.update(this.path, this.uid, user);
  }

}
