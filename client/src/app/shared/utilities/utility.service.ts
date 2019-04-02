import {Injectable} from '@angular/core';
import {DatabaseService} from "../../core/database/database.service";
import {Sponsor} from "../../sponsors/shared/sponsor.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private readonly path = 'tags';

  constructor(private databaseService: DatabaseService<any>) {

  }

  listTags() {
    return this.databaseService.get(this.path, 'tags').pipe(
      map(
        data => {
          let temp = [];
          data.tags.forEach(
            (tag, index) => {
              temp[index] = {'name': tag}
            }
          );
          return temp;
        }
      )
    )
  }
}
