import {Injectable} from '@angular/core';
import {DatabaseService} from '../../../core/database/database.service';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private readonly path = 'tags';

  constructor(private databaseService: DatabaseService<any>) {

  }

  listTags() {
    return this.databaseService.get('tags', 'tags').pipe(
      map(value => value['tags'])
    );
  }

  updateTag(tag: Tag) {
    this.databaseService.get('tags', 'tags').subscribe(value => {
      const tags: Array<Tag> = value['tags'];
      const newarr = tags.filter(item => item.name !== tag.name);
      newarr.push(tag);
      this.databaseService.update('tags', 'tags', {'tags': newarr});
    });
  }

  addTag(tag: Tag) {
    this.databaseService.update('tags', 'tags', {'tags': firebase.firestore.FieldValue.arrayUnion(tag)});
  }
}

export interface Tag {
  name: string;
  color: string;
}
