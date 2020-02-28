import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Poll} from '../../../votings/shared/poll.model';
import {PollService} from '../../../votings/shared/poll.service';
import {Observable} from 'rxjs';
import {Pollq} from '../../../votings/shared/pollq';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {
  poll$: Observable<Poll>;
  id: String;
  private qList: Observable<Pollq[]>;

  constructor(private route: ActivatedRoute, private pollService: PollService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.poll$ = this.pollService.getPoll(this.id);
    this.qList = this.pollService.listPollQs(this.id);
  }

  deletePollQ(id) {
    this.pollService.deletePollQ(id, this.id);
  }

}
