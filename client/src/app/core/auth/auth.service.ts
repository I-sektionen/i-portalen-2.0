import { Injectable } from '@angular/core';
import { FireAuthService } from '../firebase/fire-auth/fire-auth.service';
import { Observable } from 'rxjs/index';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuthService: FireAuthService,
    private router: Router,
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

  getUserEmail(liu_id: string) {
    return `${liu_id}@student.liu.se`;
  }

  loginLiUIDAndPassword(liu_id: string, password: string) {
    return this.firebaseAuthService.loginEmailAndPassword(this.getUserEmail(liu_id), password);
  }

  sendPasswordResetEmail(liu_id: string) {
    return this.firebaseAuthService.sendPasswordResetEmail(this.getUserEmail(liu_id));
  }

  logout() {
    return this.firebaseAuthService.logout().then(() => {
      this.router.navigate(['']);
    });
  }
}
