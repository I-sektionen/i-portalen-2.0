import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationsComponent } from './organisations.component';
import { OrganisationsListComponent } from './organisations-list-component/organisations.list.component'
import { SingleOrganisationComponent } from './single-organisation-component/single.organisation.component';

const routes: Routes = [
  {
    path: 'organisations',
    component: OrganisationsComponent,
    children: [
      {
        path: '', component: OrganisationsListComponent
      },
      {
        path: 'webgroup', component: SingleOrganisationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationsRoutingModule { }
