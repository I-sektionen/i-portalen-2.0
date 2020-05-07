import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/post.model';
import {PostStatus} from '../shared/post-status.enum';

@Component({
  selector: 'app-approve-post',
  templateUrl: './approve-post.component.html',
  styleUrls: ['./approve-post.component.scss']
})
export class ApprovePostComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postServ: PostService) { }

  ngOnInit() {
    this.posts$ = this.postServ.list(PostStatus.WaitingToBeApproved);
  }

}
