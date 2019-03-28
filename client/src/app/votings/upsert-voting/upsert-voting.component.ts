import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Voting} from "../shared/votings.model";
import {DynamicFormField} from "../../dynamic-forms/shared/dynamic-form.model";
import {VotingsService} from "../shared/votings.service";
import {VotingDynamicFormService} from "../shared/voting-dynamic-form.service";

@Component({
  selector: 'app-upsert-voting',
  templateUrl: './upsert-voting.component.html',
  styleUrls: ['./upsert-voting.component.scss']
})
export class UpsertVotingComponent implements OnChanges {

  @Input() voting: Voting;

  votingFormFields: DynamicFormField[];


  constructor(
    private votingDynamicFormService: VotingDynamicFormService,
    private votingsService: VotingsService
  ) { }

  ngOnChanges() {
    this.votingDynamicFormService.getDynamicFormFields(this.voting).then(formFields => {
      this.votingFormFields = formFields;
    });
  }

  submit(voting) {
    if (this.voting) {
      this.votingsService.updateVoting(this.voting.id, voting);
    } else {
      this.votingsService.insertVoting(voting);
    }
  }
}
