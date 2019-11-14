import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collections-upsert',
  templateUrl: './collections-upsert.component.html',
  styleUrls: ['./collections-upsert.component.scss']
})
export class CollectionsUpsertComponent {

  @Input() collection: string;
  @Input() item: any;

  constructor() { }

}
