import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { ApproveArticlesComponent } from './approve-articles/approve-articles.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'my-posts',
    component: MyPostsComponent
  },
  {
    path: 'approve-articles',
    component: ApproveArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
