import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { SharedModule } from '../../shared/shared.module';
import { FirebaseModule } from '../../core/firebase/firebase.module';
import { MatButtonModule, MatCardModule, MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { BookingWeekComponent } from './booking-week/booking-week.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookingTypeComponent } from './booking-type/booking-type.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

@NgModule({
  declarations: [BookingsComponent, BookingCalendarComponent, BookingWeekComponent, BookingTypeComponent, BookingPageComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    BookingsRoutingModule,
    SharedModule,
    FirebaseModule,
    FlexLayoutModule,

    // Material
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
  ]
})
export class BookingsModule { }
