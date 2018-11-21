import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';
import { SingleOrganisationComponent } from './single-organisation-component/single.organisation.component';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [OrganisationsComponent, SingleOrganisationComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    OrganisationsRoutingModule,
    SharedModule,
    MatGridListModule,
    MatListModule
  ]
})
export class OrganisationsModule { }
