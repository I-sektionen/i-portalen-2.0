import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore/firestore.service';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs/index';
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

  private texts = {};


  constructor(
    private firestoreService: FirestoreService<Text>,
  ) { }

  getText(id: string, page: string): Observable<Text> {
    if (this.texts[id]) {
      return of({id: id, value: this.texts[id]}); // return from local storage as observable if downloaded earlier
    } else {
      return this.firestoreService.get(this.path, id).pipe(
        tap(text => {
          if (!text) {
            this.upsertText({
              id: id,
              value: this.lorem,
              page: page
            });
          } else {
            this.texts[id] = text.value; // store text in local storage
          }
        })
      );
    }
  }

  getTexts(): Observable<Text[]> {
    return this.firestoreService.list(this.path);
  }

  upsertText(text: Text) {
    delete this.texts[text.id]; // remove modified text from local storage
    const newText: Text = {
      id: text.id,
      value: text.value,
      page: text.page,
    };
    return this.firestoreService.upsert(this.path, text.id, newText);
  }

  deleteText(id) {
    return this.firestoreService.delete(this.path, id);
  }
}
