import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookingType } from '../shared/booking.model';
import { BookingService } from '../shared/booking.service';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.scss']
})
export class BookingCalendarComponent implements OnInit, OnChanges {

  weekDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
  dates = [];
  dateformat = 'MM/DD';

  @Input() type: BookingType;
  @Input() week: number;

  constructor(
    private bookingService: BookingService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.dates = this.getWeekDaysByWeekNumber(this.week);
  }

  getWeekDaysByWeekNumber(weekNumber) {
    const date = moment().isoWeek(weekNumber || 1).startOf('week');
    let weekLength = 7;
    const result = [];
    while (weekLength--) {
      date.add(1, 'day');
      result.push(date.format(this.dateformat));
    }
    return result;
  }
}
