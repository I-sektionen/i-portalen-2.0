import {Injectable} from '@angular/core';
import {DatabaseService} from '../../../core/database/database.service';
import {Post} from './post.model';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly path = 'posts';
  constructor(private databaseService: DatabaseService<Post>) {
  }
  getPost(id) {
    return this.databaseService.doc(this.path, id).get().pipe(map((post => {
      const data = post.data() as Post;
      return {...data, id: post.id};
    })));
  }
}


