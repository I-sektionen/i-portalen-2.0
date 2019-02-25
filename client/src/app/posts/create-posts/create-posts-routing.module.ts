import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from "../posts/posts.component";
import {CreatePostsComponent} from "./create-posts.component";

const routes: Routes = [{
  path: 'posts',
  component: CreatePostsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePostsRoutingModule { }
