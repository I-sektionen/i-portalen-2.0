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
    this.post = {
      ...this.post,
      ingress: '',
      title: '',
      isEvent: false,
      //Pre-filled markdown text
      text:
        /* '![](https://i.imgur.com/99onY9r.jpg)\n'+ */
        '\n# This is a header\n\n**This is bold text**\n\n*This is italic text*\n\n> This is a quote.\n> It can span multiple lines!\n\n1. Numbered list item\n2. Numbered list item\n3. Numbered list item',
      availableCategories: [
        { name: 'Artikel', id: 1 },
        { name: 'Event', id: 2 },
        { name: 'Annons', id: 3 },
        { name: 'Workshop', id: 4 }
      ],
      choosenCategories: [],
      imgURLs: [],
      imgNames: []
    };
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
