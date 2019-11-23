import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BookingType } from '../shared/booking.model';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  bookingType: BookingType = BookingType.Car;
  today = moment();
  selectedWeek: number;

  constructor() { }

  ngOnInit() {
  }

}
