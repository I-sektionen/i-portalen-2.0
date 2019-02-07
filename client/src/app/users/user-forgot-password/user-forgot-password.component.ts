import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.scss']
})
export class UserForgotPasswordComponent {

  loginForm = new FormGroup({
    liu_id: new FormControl('',
      [Validators.required],
    ),
  });

  constructor(private authService: AuthService) {
  }

  get liu_id() {
    return this.loginForm.get('liu_id');
  }

  get password() {
    return this.loginForm.get('password');
  }

  reset() {
    console.log("Password reset mail sent!");
  }

}
