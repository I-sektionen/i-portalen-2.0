import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingsRoutingModule } from './votings-routing.module';
import { VotingsComponent } from './votings/votings.component';
import { UpsertVotingComponent } from './upsert-voting/upsert-voting.component';
import {SharedModule} from '../shared/shared.module';
import {DynamicFormsModule} from '../dynamic-forms/dynamic-forms.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [VotingsComponent, UpsertVotingComponent],
  exports: [UpsertVotingComponent],
  imports: [
    CommonModule,
    VotingsRoutingModule,
    SharedModule,
    DynamicFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class VotingsModule { }
