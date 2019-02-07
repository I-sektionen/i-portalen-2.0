import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {UserForgotPasswordComponent} from "./user-forgot-password/user-forgot-password.component";

@NgModule({
  declarations: [UserLoginComponent, UserProfileComponent, UserForgotPasswordComponent],
  exports: [UserLoginComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,

    // Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class UsersModule { }
