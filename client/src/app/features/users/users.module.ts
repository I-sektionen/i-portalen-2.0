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
import { MyPostsComponent } from './my-posts/my-posts.component';
import {MatListModule} from '@angular/material/list';
import { ApproveArticlesComponent } from './approve-articles/approve-articles.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [UserLoginComponent, UserProfileComponent, MyPostsComponent, ApproveArticlesComponent ],
  exports: [UserLoginComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule,

    // Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatPaginatorModule
  ]
})
export class UsersModule { }
