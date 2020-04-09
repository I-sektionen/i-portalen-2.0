import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../../features/posts/shared/post.model';
import {Tag} from '../../features/admin/utilities/tags.service';

@Pipe({
  name: 'TagFilter',
  pure: false
})
export class TagFilterPipe implements PipeTransform {

  transform(value: Post[], args: Tag[]): any {
    console.log(args);
    return null;
  }

}

