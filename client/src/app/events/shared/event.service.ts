import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Event} from './event';
import {Role, User} from '../../users/shared/user.model';
import {AuthService} from '../../core/auth/auth.service';
import {DatabaseService} from '../../core/database/database.service';
import {shareReplay, switchMap} from 'rxjs/operators';
import {QueryFn} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly path = 'event';

  private user$: Observable<User>;
  private isAdmin$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private databaseService: DatabaseService<Event>,
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

  updateEvent(event: Event) {
    return this.databaseService.update(this.path, this.uid, event);
  }

  listEvents(queryFn?: QueryFn) {
    return this.databaseService.list(this.path, queryFn);
  }
}
