import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../../features/posts/shared/post.model';


@Pipe({
  name: 'FilterPostTitle'
})
export class FilterPostTitlePipe implements PipeTransform {
  transform(posts: Post[], search: string): Post[] {
      return posts.filter(post => post.title ? post.title.toLowerCase().includes(search.toLowerCase()) : false);
  }
}
