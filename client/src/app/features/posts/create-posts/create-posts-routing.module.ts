import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostsComponent } from './create-posts.component';

const routes: Routes = [
  {
    path: 'create-post',
    component: CreatePostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePostsRoutingModule {}
