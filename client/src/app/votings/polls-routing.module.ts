import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoteComponent} from './votings/vote.component';
import {CreatePollComponent} from './create-poll/create-poll.component';
import {CreatePollqComponent} from './create-pollq/create-pollq.component';
import {PollDashboardComponent} from './poll-dashboard/poll-dashboard.component';


const routes: Routes = [
  {
    path: 'polls',
    component: VoteComponent,
  },
  {
    path: 'create_poll',
    component: CreatePollComponent,
  },
  {
    path: 'create_poll_question',
    component: CreatePollqComponent,
  },
  {
    path: 'poll_dashboard',
    component: PollDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule {
}
