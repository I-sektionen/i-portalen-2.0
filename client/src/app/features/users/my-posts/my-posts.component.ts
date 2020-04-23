import {Component, OnInit} from '@angular/core';
import {Post} from '../../posts/shared/post.model';
import {PostStatus} from '../../posts/shared/post-status.enum';
import {PostService} from '../../posts/shared/post.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})

export class MyPostsComponent implements OnInit {
  articles: Post[];
  waitingArticles: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.listUsersPosts(PostStatus.Public, 50, 'created', 'desc').subscribe((result: Post[]) => {
      console.log(result);
      this.articles = result;
    });
    this.postService.listUsersPosts(PostStatus.WaitingToBeApproved, 50, 'created', 'desc').subscribe((result: Post[]) => {
      console.log(result);
      this.waitingArticles = result;
    });
  }

}

