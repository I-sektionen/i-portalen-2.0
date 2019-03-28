import {Component, Input, OnInit} from '@angular/core';
import { VotingsService } from "../shared/votings.service";

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

  ngOnInit() {

  }
  upvote() {
  }
}
