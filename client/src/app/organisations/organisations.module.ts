import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule, MatListModule } from '@angular/material';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';
import { OrganisationsListComponent } from './organisations-list-component/organisations.list.component'
import { SingleOrganisationComponent } from './single-organisation-component/single.organisation.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [OrganisationsComponent, SingleOrganisationComponent, OrganisationsListComponent, CardComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    OrganisationsRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule
  ]
})
export class OrganisationsModule { }
