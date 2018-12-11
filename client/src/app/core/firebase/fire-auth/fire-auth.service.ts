import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  private auth;
  private authState;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.auth = afAuth.auth;
    this.authState = afAuth.authState;
  }

  get uid() {
    return this.auth.currentUser.uid;
  }

  get authUser() {
    return this.authState;
  }

  get isLoggedIn(): Observable<boolean> {
    return this.authState.pipe(
      map(user => !!user)
    );
  }

  loginEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  sendPasswordResetEmail(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
  //.catch((err) => {
  //       this.wrongCred = true;
  //     });

  logout() {
    return this.auth.signOut();
  }
}
