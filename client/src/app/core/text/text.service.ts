import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore/firestore.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/index';
import { Text } from './text.model';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private readonly path = 'texts';
  public readonly lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
    'laboris nisi ut aliquip ex ea commodo consequat.';


  constructor(
    private firestoreService: FirestoreService<Text>,
  ) { }

  getText(id: string, page: string) {
    return this.firestoreService.get(this.path, id).pipe(
      tap(text => {
        if (!text) {
          this.upsertText({
            id: id,
            value: this.lorem,
            page: page
          });
        }
      })
    );
  }

  getTexts(): Observable<Text[]> {
    return this.firestoreService.list(this.path);
  }

  upsertText(text: Text) {
    const newText: Text = {
      id: text.id,
      value: text.value,
      page: text.page,
    };
    this.firestoreService.upsert(this.path, text.id, newText);
  }

  deleteText(id) {
    this.firestoreService.delete(this.path, id);
  }
}
