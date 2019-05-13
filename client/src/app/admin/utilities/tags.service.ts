import {Injectable} from '@angular/core';
import {DatabaseService} from '../../core/database/database.service';
import {map} from 'rxjs/operators';


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
}

export interface Tag {
  name: string;
  color: string;
}
