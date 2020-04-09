import {Component, OnInit} from '@angular/core';
import {PostService} from './features/posts/shared/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private postServ: PostService) {
  }

  ngOnInit(): void {
    // this.postServ.list().subscribe(value => console.log(value));
  }
}
