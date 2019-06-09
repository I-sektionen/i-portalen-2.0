import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatabaseService} from '../../core/database/database.service';
import {FireStorageService} from '../../core/firebase/fire-storage/fire-storage.service';
import {Tag} from '../utilities/tags.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
@Component({
  selector: 'app-collections-table',
  templateUrl: './collections-table.component.html',
  styleUrls: ['./collections-table.component.scss']
})
export class CollectionsTableComponent implements OnInit {

  @Input() dataSource: any[];
  @Input() displayedColumns: string[];
  @Input() collection: string;
  @Output() collectionChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() itemToEdit: any;
  @Output() itemToEditChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private databaseService: DatabaseService<any>,
    private storageService: FireStorageService
  ) { }

  ngOnInit() {
  }

  setCollection(path) {
    this.collectionChange.emit(path);
  }

  setEditItem(item) {
    this.itemToEditChange.emit(item);
  }

  deleteItem(item) {
    // Delete any files in storage
    Object.keys(item).forEach(key => {
      if (typeof item[key] === 'string' && item[key].indexOf('firebasestorage') > -1) {
        this.storageService.deleteFile(item[key]);
      }
    });

    // Delete from firestore
    this.databaseService.delete(this.collection, item.id);
  }
  deleteTag(tag: Tag) {
    this.databaseService.update('tags', 'tags', {'tags': firebase.firestore.FieldValue.arrayRemove(tag)});
  }

  addTag(tag: Tag) {
    this.databaseService.update('tags', 'tags', {'tags': firebase.firestore.FieldValue.arrayUnion(tag)});
  }

}
