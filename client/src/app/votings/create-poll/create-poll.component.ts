import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrganisationService} from '../../organisations/shared/organisation.service';
import {Organisation} from '../../organisations/shared/organisation.model';
import {Observable} from 'rxjs';
import {PollService} from '../shared/poll.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  disabled = false;

  createPollForm = new FormGroup({
    heading: new FormControl(''),
    desc: new FormControl(''),
    admins: new FormControl([]),
    resultAccesType: new FormControl(''),
    extendedUsers: new FormControl(''),
    resultAcces: new FormControl(''),
    publishOptions: new FormControl(''),
    verification: new FormControl(false),
    publishDate: new FormControl(''),
    unpublishDate: new FormControl(''),
    event: new FormControl(false),
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
    'Visa när admin startar omröstning',
    'Visa när event startar',
    'Starta vid förspecifierad tid'];
  eventList: string[] = [
    'Vårmötet',
    'Vintermötet',
    'webgroupmötet'];

  constructor(private pollService: PollService, private organisationService: OrganisationService) {
    this.createPollForm.get('publishOptions').valueChanges.subscribe((publishOptions) => {
      if (publishOptions === 'Starta vid förspecifierad tid') {
        this.createPollForm.get('publishDate').enable();
        this.createPollForm.get('unpublishDate').enable();
      } else {
        this.createPollForm.get('publishDate').disable();
        this.createPollForm.get('unpublishDate').disable();
      }
    });
    this.adminList = organisationService.listOrganisations();
  }

  ngOnInit() {
    this.createPollForm.get('publishDate').disable();
    this.createPollForm.get('unpublishDate').disable();
  }

  onSubmit(form) {
    const letters = /[abcdefghijklmnopqrstuv]/;
    const numbers = /^[0-9]+$/;
    const users = form.extendedUsers ? form.extendedUsers.replace(/ /g, '').toLowerCase().split(',') : '';
    if (users) {
      users.forEach(user => (user.length !== 8) ? alert('En eller flera utvalda användare har för kort eller långt Liu ID') :
        (!letters.test(user.substring(0, 5))) ? alert('En eller flera utvalda användare har fel format på Liu ID') :
          (!numbers.test(user.substring(5, 8))) ? alert('En eller flera utvalda användare har fel format på Liu ID') :
            alert('Right input'));
    }

    this.pollService.insertPoll({
      admins: form.admins,
      createdBy: '',
      desc: form.desc,
      event: form.event,
      extendedUsers: users,
      heading: form.heading,
      id: '',
      publishOptions: form.publishOptions,
      resultAcces: form.resultAcces,
      resultAccesType: form.resultAccesType,
      publishDate: form.publishDate ? form.publishDate : null,
      unpublishDate: form.unpublishDate ? form.unpublishDate : null,
      verification: form.verification ? form.verification : false,
    });
    this.createPollForm.reset();
  }

}
