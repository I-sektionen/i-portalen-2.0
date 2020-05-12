import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Role, User } from './user.model';
import { DatabaseService } from '../../../core/database/database.service';
import { AuthService } from '../../../core/auth/auth.service';
import { switchMap, tap, shareReplay } from 'rxjs/operators';
import { QueryFn } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly path = 'users';

  private user$: Observable<User>;
  private isAdmin$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService<User>,
  ) {
    this.setUser();
  }

  get uid() {
    return this.authService.uid;
  }

  get user() {
    return this.user$;
  }

  get isAdmin(): Observable<boolean> {
    return of(true);
    return this.isAdmin$;
  }

  setUser() {
    this.user$ = this.authService.authUser.pipe(
      switchMap(authUser => {
        return authUser ? this.databaseService.get(this.path, authUser.uid) : of(null);
      }),
    );

    this.isAdmin$ = this.user.pipe(
      switchMap(user => of(user && user.role === Role.Admin)),
      shareReplay(),
    );
  }

  updateUser(user: User) {
    return this.databaseService.update(this.path, this.uid, user);
  }

  listUsers(queryFn?: QueryFn) {
    return this.databaseService.list(this.path, queryFn);
  }

}
