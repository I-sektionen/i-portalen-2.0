import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  wrongCred = false;
  loginScreen: boolean = true;

  loginForm = new FormGroup({
    liuId: new FormControl('',
      [Validators.required],
    ),
    password: new FormControl('',
      [Validators.required],
    ),
  });

  constructor(private authService: AuthService) {
    this.onChanges();
  }

  get liuId() {
    return this.loginForm.get('liuId');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.loginLiUIDAndPassword(this.liuId.value, this.password.value)
    .catch( (err) => {
      this.wrongCred = true;
    })
  }
  onChanges(): void {
    this.loginForm.valueChanges.subscribe(val => {
      this.wrongCred = false
    });
  }
  reset() {
    this.authService.sendPasswordResetEmail(this.liuId.value).then(

    ).catch((error) => {
      this.wrongCred = true;
    });
  }
}

