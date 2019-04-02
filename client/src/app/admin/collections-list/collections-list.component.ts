import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs/index';
import { OrganisationService } from '../../organisations/shared/organisation.service';
import { UserService } from '../../users/shared/user.service';
import { SponsorService } from '../../sponsors/shared/sponsor.service';
import {UtilityService} from "../../shared/utilities/utility.service";

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss']
})
export class CollectionsListComponent implements OnInit {

  collections = [
    {path: 'users'},
    {path: 'organisations'},
    {path: 'sponsors'},
    {path: 'tags'}
  ];

  collection: string;
  dataSource: Observable<any[]>;
  displayedColumns: string[];
  itemToEdit: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private organisationService: OrganisationService,
    private sponsorService: SponsorService,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.utilityService.listTags().subscribe(value => console.log(value));
    this.userService.listUsers().subscribe(value => console.log(value));
    this.collection = this.route.snapshot.params.collection;
    switch (this.collection) {
      case 'users': {
        this.dataSource = this.userService.listUsers();
        this.displayedColumns = ['liuId', 'name', 'role'];
        break;
      }
      case 'organisations': {
        this.dataSource = this.organisationService.listOrganisations();
        this.displayedColumns = ['name', 'editItem', 'deleteItem'];
        break;
      }
      case 'sponsors': {
        this.dataSource = this.sponsorService.listSponsors();
        this.displayedColumns = ['name', 'editItem', 'deleteItem'];
        break;
      }
      case 'tags': {
        this.dataSource = this.utilityService.listTags();
        this.displayedColumns = ['name'];
        break;
      }
      default: {
        this.dataSource = of(this.collections);
        this.displayedColumns = ['path', 'editCollection', 'add'];
      }
    }
  }

}
