import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})


export class UserLoginComponent {

  showPasswordField: boolean = true;

  loginForm = new FormGroup({
    liu_id: new FormControl('',
      [Validators.required],
    ),
    password: new FormControl('',
      [Validators.required],
    ),
  });

  constructor(private authService: AuthService) {
    this.onChanges();
  }


  get liu_id() {
    return this.loginForm.get('liu_id');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.loginLiUIDAndPassword(this.liu_id.value, this.password.value);
  }
  onChanges(): void {
this.loginForm.valueChanges.subscribe(val => {
    this.wrongCred = false
  });
}
}


