import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';

@NgModule({
  declarations: [SponsorsComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    SponsorsRoutingModule
  ]
})
export class SponsorsModule { }
