import {Component, Input, OnChanges} from '@angular/core';
import {Poll} from '../shared/poll.model';
import {DynamicFormField} from '../../dynamic-forms/shared/dynamic-form.model';
import {VotingDynamicFormService} from '../shared/voting-dynamic-form.service';
import {PollService} from '../shared/poll.service';

@Component({
  selector: 'app-upsert-voting',
  templateUrl: './upsert-voting.component.html',
  styleUrls: ['./upsert-voting.component.scss']
})
export class UpsertVotingComponent implements OnChanges {

  @Input() poll: Poll;

  votingFormFields: DynamicFormField[];


  constructor(
    private votingDynamicFormService: VotingDynamicFormService,
    private pollService: PollService,
  ) { }

  ngOnChanges() {
    this.votingDynamicFormService.getDynamicFormFields(this.poll).then(formFields => {
      this.votingFormFields = formFields;
    });
  }

  /*submit(voting) {
    if (this.voting) {
      this.votingsService.updateVoting(this.voting.id, voting);
    } else {
      this.votingsService.insertVoting(voting);
    }
  }*/
}
