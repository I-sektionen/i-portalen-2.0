import { Component, OnInit } from '@angular/core';
import { BookingType } from './shared/booking.model';
import * as moment from 'moment';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
