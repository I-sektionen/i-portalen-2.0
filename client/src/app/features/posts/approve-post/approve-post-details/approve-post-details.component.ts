import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {PostService} from '../../shared/post.service';
import {PostStatus} from '../../shared/post-status.enum';
import {Observable} from 'rxjs';
import {Post} from '../../shared/post.model';
import {FeedbackService} from '../../../../core/feedback/feedback.service';
import {FeedbackMessage, FeedbackType} from '../../../../core/feedback/feedback.model';
import {MatDialog} from '@angular/material/dialog';
import {PostRevisionComponent} from '../post-revision/post-revision.component';

@Component({
  selector: 'app-approve-post-details',
  templateUrl: './approve-post-details.component.html',
  styleUrls: ['./approve-post-details.component.scss']
})
export class ApprovePostDetailsComponent implements OnInit {
  $post: Observable<Post>;
  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private fbService: FeedbackService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.$post = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.postService.get(id, PostStatus.WaitingToBeApproved))
    );
  }

  async approve(post: Post) {
    await this.postService.approvePost(post);
    this.router.navigateByUrl('/admin/granska-inlägg');
    this.fbService.message({message: FeedbackMessage.Approved, type: FeedbackType.Primary});
  }

  revision(post: Post) {
    const ref = this.dialog.open(PostRevisionComponent);
  }
}
