import {Component, OnInit} from '@angular/core';
import {PostStatus} from './features/posts/shared/post-status.enum';
import {PostService} from './features/posts/shared/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
}
