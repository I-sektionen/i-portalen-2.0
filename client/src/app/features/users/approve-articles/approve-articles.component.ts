import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PostService} from '../../posts/shared/post.service';
import {PostStatus} from '../../posts/shared/post-status.enum';
import {Post} from '../../posts/shared/post.model';

@Component({
  selector: 'app-approve-articles',
  templateUrl: './approve-articles.component.html',
  styleUrls: ['./approve-articles.component.scss']
})
export class ApproveArticlesComponent implements OnInit {
  articles: Post[];
  ApprovedWaitingArticles: Post[];
  waitingArticles: Post[];

  constructor(private postService: PostService) {
    this.postService.list(PostStatus.ApprovedWaiting).subscribe((result: Post[]) => {
      console.log(result);
      this.articles = result;
    });
    this.postService.list(PostStatus.WaitingToBeApproved).subscribe((result: Post[]) => {
      console.log(result);
      this.waitingArticles = result;
    });
    this.postService.list(PostStatus.ApprovedWaiting).subscribe((result: Post[]) => {
      console.log(result);
      this.ApprovedWaitingArticles = result;
    });
  }

  ngOnInit() {
  }

}
