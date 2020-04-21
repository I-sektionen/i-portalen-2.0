import {Injectable} from '@angular/core';
import {DatabaseService} from '../../../core/database/database.service';
import {Post} from './post.model';
import {QueryFn} from '@angular/fire/firestore';
import {PostStatus} from './post-status.enum';
import {Observable, of} from 'rxjs';
import {UserService} from '../../users/shared/user.service';
import OrderByDirection = firebase.firestore.OrderByDirection;
import {AuthService} from '../../../core/auth/auth.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private databaseService: DatabaseService<Post>,
              private authServ: AuthService) {
  }
  private readonly suffix = 'posts';

  list(status: PostStatus, queryFn?: QueryFn): Observable<Post[]> {
    return this.databaseService.list(this.getRelativePath(status), queryFn);
  }

  get(id: string, status?: PostStatus) {
    return this.databaseService.get(this.getRelativePath(status ? status : PostStatus.Public), id);
  }

  uploadForReview(post: Post) {
    return this.databaseService.insert(this.getRelativePath(PostStatus.WaitingToBeApproved), post);
  }

  approvePost(post: Post) {

  }

  rejectPost(post: Post) {
  }

  listUsersPosts(status: PostStatus, limit: number, orderBy: string, direction?: OrderByDirection): Observable<Post[]> {
    return this.authServ.authUser.pipe(
      switchMap(
        user => {
          if (user) {
          const qFn: QueryFn =  ref => ref.where('owner', '==', user.uid).orderBy(orderBy, direction).limit(limit);
          return this.list(status, qFn);
          }
          return of(null);
        }
      )
    );


  }

  private getRelativePath(status: PostStatus) {
    return status + '-' + this.suffix;
  }

}
