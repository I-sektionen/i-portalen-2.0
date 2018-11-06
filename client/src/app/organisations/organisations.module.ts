import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';

@NgModule({
  declarations: [OrganisationsComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    OrganisationsRoutingModule
  ]
})
export class OrganisationsModule { }
