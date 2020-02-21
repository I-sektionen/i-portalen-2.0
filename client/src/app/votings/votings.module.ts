import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VotingsRoutingModule} from './votings-routing.module';
import {VotingsComponent} from './votings/votings.component';
import {UpsertVotingComponent} from './upsert-voting/upsert-voting.component';
import {SharedModule} from '../shared/shared.module';
import {DynamicFormsModule} from '../dynamic-forms/dynamic-forms.module';

import {VotingsDashboardComponent} from './votings-dashboard/votings-dashboard.component';
import {CreatePollComponent} from './create-poll/create-poll.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {CreatePollqComponent} from './create-pollq/create-pollq.component';

@NgModule({
  declarations: [VotingsComponent, UpsertVotingComponent, VotingsDashboardComponent, CreatePollComponent, CreatePollqComponent],
  exports: [UpsertVotingComponent],
  imports: [
    CommonModule,
    VotingsRoutingModule,
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
export class VotingsModule { }
