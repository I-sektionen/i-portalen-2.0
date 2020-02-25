import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoteComponent} from './votings/vote.component';
import {PollDashboardComponent} from './poll-dashboard/poll-dashboard.component';


const routes: Routes = [
  {
    path: 'polls',
    component: VoteComponent,
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
