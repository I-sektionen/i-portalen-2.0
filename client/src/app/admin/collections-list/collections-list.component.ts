import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {OrganisationService} from '../../organisations/shared/organisation.service';
import {UserService} from '../../users/shared/user.service';
import {SponsorService} from '../../sponsors/shared/sponsor.service';
import {PollService} from '../../votings/shared/poll.service';

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
    {path: 'polls'}
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
    private pollService: PollService,
  ) { }

  ngOnInit() {
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
      case 'polls': {
        this.dataSource = this.pollService.listPolls();
        this.displayedColumns = ['name', 'editItem', 'deleteItem'];
        break;
      }
      default: {
        this.dataSource = of(this.collections);
        this.displayedColumns = ['path', 'editCollection', 'add'];
      }
    }
  }

}
