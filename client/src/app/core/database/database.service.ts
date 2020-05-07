import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore/firestore.service';
import {AngularFirestoreDocument, QueryFn} from '@angular/fire/firestore';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService<Item> {

  constructor(
    private firestoreService: FirestoreService<Item>,
  ) { }

  insert(path: string, item: Item): Promise<any> {
    return this.firestoreService.insert(path, item);
  }

  upsert(path: string, id: string, data: any): Promise<void> {
    return this.firestoreService.upsert(path, id, data);
  }

  update(path: string, id: string, item: Item): Promise<void> {
    return this.firestoreService.update(path, id, item);
  }

  get(path: string, id: string): Observable<Item> {
    return this.firestoreService.get(path, id);
  }

  list(path: string, queryFn?: QueryFn): Observable<Item[]> {
    return this.firestoreService.list(path, queryFn);
  }

  delete(path: string, id: string): Promise<void> {
    return this.firestoreService.delete(path, id);
  }

  check(path: string, key: string, value: string): Observable<boolean> {
    return this.firestoreService.check(path, key, value);
  }

  // Data is optional. If no data is provided the function simply reads the document before deletion.
  move(id: string, origin: string, destination: string, data?: Item) {
    const create = this.firestoreService.col(destination).doc(id).ref;
    const del = this.firestoreService.col(origin).doc(id).ref;

    if (data) {
      const batch = this.firestoreService.batch;
      batch.set(create, data);
      batch.delete(del);
      return batch.commit();
    }

    const moveTransaction = transaction => {
      return transaction.get(del).then((doc) => {
        if (!doc.exists) {
          throw Error('Document does not exist!');
        }
        transaction.set(create, doc.data());
        transaction.delete(del);
      });
    };

    return this.firestoreService.runTransaction(moveTransaction);
  }

  doc(path: string, id: string): AngularFirestoreDocument<Item> {
    return this.firestoreService.doc(path, id);
  }

}
