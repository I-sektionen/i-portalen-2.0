import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

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
    MatExpansionModule,
  ]
})
export class OrganisationsModule { }
