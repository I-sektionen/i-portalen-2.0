import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookingType, DateBlock } from '../shared/booking.model';
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
  selectedDateBlocks: DateBlock[] = [];
  dateFormat = 'MM/DD';

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
    const date = moment().isoWeek(weekNumber).startOf('week');
    let weekLength = 7;
    const result = [];
    while (weekLength--) {
      date.add(1, 'day');
      result.push(date.toDate());
    }
    return result;
  }

  isSelected(date, block) {
    return this.selectedDateBlocks.find(dateBlock => {
      return dateBlock.date === date && dateBlock.block === block;
    });
  }

  select(date, block) {
    // Empty
    if (this.selectedDateBlocks.length === 0) {
      this.selectedDateBlocks.push({date: date, block: block});

    // Next
    } else if (this.isNextDateBlock(date, block)) {
      this.selectedDateBlocks.push({date: date, block: block});

    // Previous
    } else if (this.isPreviousDateBlock(date, block)) {
      this.selectedDateBlocks.unshift({date: date, block: block});

    // First
    } else if (this.isFirstDateBlock(date, block)) {
      this.selectedDateBlocks.shift();

    // Last
    } else if (this.isLastDateBlock(date, block)) {
      this.selectedDateBlocks.pop();
    }
  }

  isPreviousDateBlock(date, block) {
    const firstDateBlock = this.selectedDateBlocks[0];
    if (date.getTime() === firstDateBlock.date.getTime()) {
      return block === firstDateBlock.block - 1;
    } else {
      const prevDate = moment(firstDateBlock.date).add(-1, 'day').toDate();
      return date.getTime() === prevDate.getTime() && firstDateBlock.block === 1 && block === 3;
    }
  }

  isNextDateBlock(date, block) {
    const lastDateBlock = this.selectedDateBlocks[this.selectedDateBlocks.length - 1];
    if (date.getTime() === lastDateBlock.date.getTime()) {
      return block === lastDateBlock.block + 1;
    } else {
      const nextDate = moment(lastDateBlock.date).add(1, 'day').toDate();
      return date.getTime() === nextDate.getTime() && lastDateBlock.block === 3 && block === 1;
    }
  }

  isFirstDateBlock(date, block) {
    const firstDateBlock = this.selectedDateBlocks[0];
    return firstDateBlock.date.getTime() === date.getTime() && firstDateBlock.block === block;
  }

  isLastDateBlock(date, block) {
    const lastDateBlock = this.selectedDateBlocks[this.selectedDateBlocks.length -1];
    return lastDateBlock.date.getTime() === date.getTime() && lastDateBlock.block === block;
  }
}
