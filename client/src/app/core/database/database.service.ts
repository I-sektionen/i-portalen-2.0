import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore/firestore.service';
import {AngularFirestoreCollection, QueryFn} from '@angular/fire/firestore';
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

  col(path: string, queryFn?: QueryFn): AngularFirestoreCollection<Item> {
    return this.firestoreService.col(path, queryFn);
  }
}
