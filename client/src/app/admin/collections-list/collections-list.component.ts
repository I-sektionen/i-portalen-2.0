import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs/index';
import { OrganisationService } from '../../organisations/shared/organisation.service';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss']
})
export class CollectionsListComponent implements OnInit {

  collections = [
    {path: 'users'},
    {path: 'organisations'},
  ];

  collection: string;
  dataSource: Observable<any[]>;
  displayedColumns: string[];
  itemToEdit: any;

  constructor(
    private route: ActivatedRoute,
    private organisationService: OrganisationService,
  ) { }

  ngOnInit() {
    this.collection = this.route.snapshot.params.collection;
    switch (this.collection) {
      case 'organisations': {
        this.dataSource = this.organisationService.listOrganisations();
        this.displayedColumns = ['id', 'name', 'editItem', 'deleteItem'];
        break;
      }
      default: {
        this.dataSource = of(this.collections);
        this.displayedColumns = ['path', 'editCollection', 'add'];
      }
    }
  }

}
