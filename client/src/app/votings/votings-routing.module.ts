import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VotingsComponent} from './votings/votings.component';
import {CreateVotingComponent} from './create-voting/create-voting.component';


const routes: Routes = [
  {
    path: 'votings',
    component: VotingsComponent,
  },
  {
    path: 'create_voting',
    component: CreateVotingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingsRoutingModule { }
