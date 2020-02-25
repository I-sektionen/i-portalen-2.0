import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PollsRoutingModule} from './polls-routing.module';
import {VoteComponent} from './votings/vote.component';
import {UpsertVotingComponent} from './upsert-voting/upsert-voting.component';
import {SharedModule} from '../shared/shared.module';
import {DynamicFormsModule} from '../dynamic-forms/dynamic-forms.module';
import {PollDashboardComponent} from './poll-dashboard/poll-dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [VoteComponent, UpsertVotingComponent, PollDashboardComponent],
  exports: [UpsertVotingComponent],
  imports: [
    CommonModule,
    PollsRoutingModule,
    SharedModule,
    DynamicFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
  ]
})
export class PollsModule {
}
