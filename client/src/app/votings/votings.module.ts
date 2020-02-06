import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingsRoutingModule } from './votings-routing.module';
import { VotingsComponent } from './votings/votings.component';
import { UpsertVotingComponent } from './upsert-voting/upsert-voting.component';
import {SharedModule} from "../shared/shared.module";
import {DynamicFormsModule} from "../dynamic-forms/dynamic-forms.module";
import { VotingsDashboardComponent } from './votings-dashboard/votings-dashboard.component';

@NgModule({
  declarations: [VotingsComponent, UpsertVotingComponent, VotingsDashboardComponent],
  exports: [UpsertVotingComponent],
  imports: [
    CommonModule,
    VotingsRoutingModule,
    SharedModule,
    DynamicFormsModule,
  ]
})
export class VotingsModule { }
