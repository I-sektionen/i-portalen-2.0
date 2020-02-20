import {Component, Input, OnInit} from '@angular/core';
import { VotingsService } from '../shared/votings.service';
import {Voting} from '../shared/votings.model';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-votings',
  templateUrl: './votings.component.html',
  styleUrls: ['./votings.component.scss']
})
export class VotingsComponent implements OnInit {

  @Input() voting;
  @Input() votingAlternative;
  @Input() userId;

  constructor(private votingsService: VotingsService) { }
  ngOnInit() { }
  push(path: string, name: string, id: string) {
    if (name !== '' && id !== '') {
      return this.votingsService.insertVote(path, {name, id});
    }
  }
}
