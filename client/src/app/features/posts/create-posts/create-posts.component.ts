import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { AttributesComponent } from './attributes/attributes.component';

@Component({
  selector: 'app-posts-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class CreatePostsComponent implements OnInit {
  constructor() {}
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
}

// https://www.npmjs.com/package/simplemde
// https://github.com/markedjs/marked
