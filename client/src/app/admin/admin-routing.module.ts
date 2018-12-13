import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TextEditComponent } from './text-edit/text-edit.component';
import { AdminGuard } from '../core/auth/guards/admin.guard';
import { UpsertOrganisationComponent } from '../organisations/upsert-organisation/upsert-organisation.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'redigera-texter',
        component: TextEditComponent,
      },
      {
        path: 'skapa-organisation',
        component: UpsertOrganisationComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
