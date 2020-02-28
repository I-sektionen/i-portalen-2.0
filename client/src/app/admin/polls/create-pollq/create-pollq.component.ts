import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PollService} from '../../../votings/shared/poll.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Poll} from '../../../votings/shared/poll.model';
import {Observable} from 'rxjs';
import {FirestoreService} from '../../../core/firebase/firestore/firestore.service';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-pollq.component.html',
  styleUrls: ['./create-pollq.component.scss']
})
export class CreatePollqComponent implements OnInit {
  disabled = false;

  poll$: Observable<Poll>;
  id: string;
  sum = 0;

  createPollQForm = new FormGroup({
    question: new FormControl(''),
    desc: new FormControl(''),
    admins: new FormControl([]),
    resultAccesType: new FormControl(''),
    extendedUsers: new FormControl(''),
    resultAcces: new FormControl(''),
    publishOptions: new FormControl(''),
    anonymous: new FormControl(true),
  });

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

  constructor(private pollService: PollService,
              private route: ActivatedRoute, private router: Router,
              private firestoreService: FirestoreService<any>) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.poll$ = this.pollService.getPoll(this.id);
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
    this.poll$.subscribe(res => this.sum = res.questionSum + 1);
    this.firestoreService.update('polls', this.id, {
      questionSum: this.sum
    });

    this.pollService.insertPollQ({
      anonymous: false,
      poll: this.id,
      question: form.question,
      status: false,
      createdBy: '',
      desc: form.desc,
      extendedUsers: users,
      id: '',
      resultAcces: form.resultAcces,
      resultAccesType: form.resultAccesType,
    }, this.id);
    this.router.navigate([`../`], {relativeTo: this.route});
  }

}
