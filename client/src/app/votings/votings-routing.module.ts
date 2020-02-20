import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VotingsComponent} from './votings/votings.component';

const routes: Routes = [
  {
    path: 'votings',
    component: VotingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingsRoutingModule { }
