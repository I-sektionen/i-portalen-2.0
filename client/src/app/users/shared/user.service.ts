import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Role, User } from './user.model';
import { DatabaseService } from '../../core/database/database.service';
import { AuthService } from '../../core/auth/auth.service';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly path = 'users';

  private user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService<User>,
  ) {
    this.setUser();
  }

  get user() {
    return this.user$;
  }

  get uid() {
    return this.authService.uid;
  }

  get isAdmin(): Observable<boolean> {
    return this.user.pipe(
      map(user => user && user.role === Role.Admin)
    );
  }

  setUser() {
    this.user$ = this.authService.authUser.pipe(
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
