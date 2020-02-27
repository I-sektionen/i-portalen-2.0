import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { Role, User } from './user.model';
import { DatabaseService } from '../../../core/database/database.service';
import { AuthService } from '../../../core/auth/auth.service';
import {switchMap, tap, shareReplay, map} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, QueryFn, QuerySnapshot} from '@angular/fire/firestore';
import {Permissions} from '../../../core/auth/permissions.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly path = 'users';
  private readonly perm_path = 'perm_groups';

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

  hasPermission(action: Permissions): Observable<boolean> {
    return this.authService.isLoggedIn.pipe(
      switchMap(
        (loggedIn) => {
          if (loggedIn) {
          return this.databaseService.col(this.perm_path, ref => ref
            .where('members', 'array-contains', this.uid))
            .get()
            .pipe(
              map(groups => !!groups.docs.find(value => {const perm = value.get('permissions');
                return perm.includes(action) || perm.includes(Permissions.Super);
              }))
            );
        }
          return of(false);
        }
      )
    );
  }

}
