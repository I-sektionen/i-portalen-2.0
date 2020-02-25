import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {TextEditComponent} from './text-edit/text-edit.component';
import {AdminGuard} from '../core/auth/guards/admin.guard';
import {CollectionsListComponent} from './collections-list/collections-list.component';
import {PollAdminComponent} from './poll-admin/poll-admin.component';

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
        path: 'poll_admin',
        component: PollAdminComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
