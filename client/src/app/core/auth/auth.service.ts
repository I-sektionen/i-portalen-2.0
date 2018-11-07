import { Injectable } from '@angular/core';
import { FireAuthService } from '../firebase/fire-auth/fire-auth.service';
import { Observable } from 'rxjs/index';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuthService: FireAuthService,
  ) { }

  get isLoggedIn(): Observable<boolean> {
    return this.firebaseAuthService.isLoggedIn;
  }

  get uid(): string {
    return this.firebaseAuthService.uid;
  }

  get authUser(): Observable<User> {
    return this.firebaseAuthService.authUser;
  }

  loginLiUIDAndPassword(liu_id: string, password: string) {
    const email = `${liu_id}@student.liu.se`;
    console.log(email);
    return this.firebaseAuthService.loginEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuthService.logout();
  }
}
