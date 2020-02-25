import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Poll} from '../../../votings/shared/poll.model';
import {PollService} from '../../../votings/shared/poll.service';

@Component({
  selector: 'app-poll-admin',
  templateUrl: './poll-admin.component.html',
  styleUrls: ['./poll-admin.component.scss']
})
export class PollAdminComponent implements OnInit {
  private pollList: Observable<Poll[]>;

  constructor(private pollService: PollService) {
    this.pollList = this.pollService.listPolls();

  }

  ngOnInit() {
  }

}
