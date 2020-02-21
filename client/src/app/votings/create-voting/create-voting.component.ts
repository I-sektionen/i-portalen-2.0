import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {VotingsService} from '../shared/votings.service';
import {Voting} from '../shared/votings.model';
import {OrganisationService} from '../../organisations/shared/organisation.service';
import {Organisation} from '../../organisations/shared/organisation.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-voting',
  templateUrl: './create-voting.component.html',
  styleUrls: ['./create-voting.component.scss']
})
export class CreateVotingComponent implements OnInit {
  disabled = false;
  voting: Voting;

  createVotingsForm = new FormGroup({
    heading: new FormControl(''),
    desc: new FormControl(''),
    admins: new FormControl([]),
    resultAccesType: new FormControl(''),
    extendedUsers: new FormControl(''),
    resultAcces: new FormControl(''),
    publishOptions: new FormControl(''),
    verification: new FormControl(false),
    anonymous: new FormControl(true),
    usePublishDate: new FormControl(true),
    publishDate: new FormControl(''),
    unpublishDate: new FormControl(''),
    eventType: new FormControl(false),
  });

  private adminList: Observable<Organisation[]>;
  accesList: string[] = [
    'Publik tillgång till detaljerad information om röstningen',
    'Publik tillgång till begränsad information om röstningen',
    'Private åtkomst enbart för admin',
    'Privat åtkomst enbart för utvalda användare',
  ];
  typeList: string[] = [
    'Gör resultat synliga innan man röstat',
    'Gör resultat synliga efter man röstat',
    'Gör resultat synliga när omröstningen är stängd'];
  publishTypeList: string[] = [
    'Visa när event startar',
    'Visa när admin startar omröstning',
    'Starta vid förspecifierad tid'];
  eventList: string[] = [
    'Vårmötet',
    'Vintermötet',
    'webgroupmötet'];

  constructor(private votingsService: VotingsService, private organisationService: OrganisationService) {
    this.createVotingsForm.get('usePublishDate').valueChanges.subscribe((useDates) => {
      if (useDates) {
        this.createVotingsForm.get('publishDate').enable();
        this.createVotingsForm.get('unpublishDate').enable();
      } else {
        this.createVotingsForm.get('publishDate').disable();
        this.createVotingsForm.get('unpublishDate').disable();
      }
    });
    this.adminList = organisationService.listOrganisations();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    const letters = /[abcdefghijklmnopqrstuv]/;
    const numbers = /^[0-9]+$/;
    const users = form.extendedUsers.replace(/ /g, '').split(',');
    users.forEach(user => (user.length === 8) ? alert('En eller flera utvalda användare har för kort eller långt Liu ID') :
      (letters.test(user.substring(0, 4))) ? alert('En eller flera utvalda användare har fel format på Liu ID') :
        (numbers.test(user.substring(5, 7))) ? alert('En eller flera utvalda användare har fel format på Liu ID') :
          alert('Right input'));
    this.votingsService.insertVoting({
      admins: form.admins,
      anonymous: form.anonymous,
      createdBy: '',
      desc: form.desc,
      eventType: form.eventType,
      extendedUsers: users,
      heading: form.heading,
      id: '',
      publishDate: form.publishDate,
      publishOptions: form.publishOptions,
      resultAcces: form.resultAcces,
      resultAccesType: form.resultAccesType,
      unpublishDate: form.unpublishDate,
      verification: form.verification,
      usePublishDate: form.usePublishDate
    });
    this.createVotingsForm.reset();
  }

}
