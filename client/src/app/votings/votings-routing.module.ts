import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VotingsComponent} from './votings/votings.component';
import {CreatePollComponent} from './create-poll/create-poll.component';
import {CreatePollqComponent} from './create-pollq/create-pollq.component';


const routes: Routes = [
  {
    path: 'votings',
    component: VotingsComponent,
  },
  {
    path: 'create_poll',
    component: CreatePollComponent,
  },
  {
    path: 'create_poll_question',
    component: CreatePollqComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingsRoutingModule { }
