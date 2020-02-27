import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TextEditComponent } from './text-edit/text-edit.component';
import { AdminGuard } from '../../core/auth/guards/admin.guard';
import { CollectionsListComponent } from './collections-list/collections-list.component';
import {PermissionGuard} from '../../core/auth/guards/permission.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [PermissionGuard],
    data: {action: 'open-admin-interface'},
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
