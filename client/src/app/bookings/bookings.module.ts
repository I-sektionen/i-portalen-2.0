import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookingsComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule,
  ]
})
export class BookingsModule { }
