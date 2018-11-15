import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [OrganisationsComponent, CardComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    OrganisationsRoutingModule,
    SharedModule,
  ]
})
export class OrganisationsModule { }
