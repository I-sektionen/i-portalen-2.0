import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SponsorsComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    SharedModule,
  ]
})
export class SponsorsModule { }
