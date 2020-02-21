import {Component, OnInit} from '@angular/core';
import {VoteService} from '../shared/vote.service';


@Component({
  selector: 'app-votings',
  templateUrl: './votings.component.html',
  styleUrls: ['./votings.component.scss']
})
export class VotingsComponent implements OnInit {

  constructor(private votingsService: VoteService) {
  }

  ngOnInit() {
  }

  push(path: string, name: string, id: string) {
    if (name !== '' && id !== '') {
      return this.votingsService.insertVote(path, {name, id});
    }
  }
}
