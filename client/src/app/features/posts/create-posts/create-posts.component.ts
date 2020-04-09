import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { AttributesComponent } from './attributes/attributes.component';
import {DatabaseService} from "../../../core/database/database.service";

@Component({
  selector: 'app-posts-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class CreatePostsComponent implements OnInit {
  constructor(private databaseService: DatabaseService<Post>) {}
  fullscreenToggle: boolean = false;
  post: Post;

  //imgURL: string;

  ngOnInit() {

  }

  postChange(post: Post) {
    this.post = post;
  }

  fullscrenEmit(toggle: boolean) {
    this.fullscreenToggle = toggle;
  }

  upload() {
    this.databaseService.insert('posts', this.post);
  }
}

// https://www.npmjs.com/package/simplemde
// https://github.com/markedjs/marked
