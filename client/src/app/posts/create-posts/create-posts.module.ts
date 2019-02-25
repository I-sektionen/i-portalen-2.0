import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePostsRoutingModule } from './create-posts-routing.module';
import {CreatePostsComponent} from "./create-posts.component";

@NgModule({
  declarations: [CreatePostsComponent],
  imports: [
    CommonModule,
    CreatePostsRoutingModule
  ]
})
export class CreatePostsModule { }
