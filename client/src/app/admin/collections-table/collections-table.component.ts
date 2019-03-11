import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatabaseService } from '../../core/database/database.service';

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
    private databaseService: DatabaseService<any>
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
    this.databaseService.delete(this.collection, item.id);
    console.log(this.collection);
  }

}
