import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {TextEditComponent} from './text-edit/text-edit.component';
import {AdminGuard} from '../core/auth/guards/admin.guard';
import {CollectionsListComponent} from './collections-list/collections-list.component';
import {PollAdminComponent} from './polls/poll-admin/poll-admin.component';
import {CreatePollComponent} from './polls/create-poll/create-poll.component';
import {CreatePollqComponent} from './polls/create-pollq/create-pollq.component';
import {PollDetailComponent} from './polls/poll-detail/poll-detail.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: CollectionsListComponent,
      },
      {
        path: 'redigera-texter',
        component: TextEditComponent,
      },
      {
        path: 'redigera/:collection',
        component: CollectionsListComponent,
      },
      {
        path: 'redigera/:collection/:id',
        component: PollDetailComponent,
      },
      {
        path: 'poll_admin',
        component: PollAdminComponent,
      },
      {
        path: 'poll_admin/create_poll',
        component: CreatePollComponent,
      },
      {
        path: 'poll_admin/:id',
        component: PollDetailComponent,
      },
      {
        path: 'poll_admin/:id/create_poll_question',
        component: CreatePollqComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
