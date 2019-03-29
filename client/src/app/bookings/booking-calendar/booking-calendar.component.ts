import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Booking, BookingType, DateBlock } from '../shared/booking.model';
import { BookingService } from '../shared/booking.service';
import * as moment from 'moment';
import { UserService } from '../../users/shared/user.service';
import { Observable, Subscription } from 'rxjs/index';

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.scss']
})
export class BookingCalendarComponent implements OnChanges, OnDestroy {

  today = new Date();
  weekDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
  dates = [];
  selectedDateBlocks: DateBlock[] = [];
  bookings: Booking[];
  bookingsSubscription: Subscription;

  @Input() type: BookingType;
  @Input() week: number;

  constructor(
    private bookingService: BookingService,
    private userService: UserService,
  ) { }

  ngOnChanges() {

    // Dates
    this.dates = this.bookingService.getDatesByWeekNumber(this.week);

    // Bookings
    this.bookingsSubscription = this.bookingService.listBookings(this.week, this.type).subscribe(bookings => {
      this.bookings = bookings;
    });

    // Reset
    this.selectedDateBlocks = [];
  }

  ngOnDestroy() {
    this.bookingsSubscription.unsubscribe();
  }

  isBookable(date, block) {
    return !this.isOld(date, block) && !this.isBooked(date, block);
  }

  isOld(date, block) {
    const _date = new Date(date);
    switch (block) {
      case 1:
        _date.setHours(8);
        break;
      case 2:
        _date.setHours(13);
        break;
      case 3:
        _date.setHours(17);
        break;
    }
    return _date.getTime() <= this.today.getTime();
  }

  isBooked(date, block) {
    return this.bookings.find(booking => {
      return booking.date.toDate().getTime() === date.getTime() && booking.block === block;
    });
  }

  isSelected(date, block) {
    return this.selectedDateBlocks.find(dateBlock => {
      return dateBlock.date === date && dateBlock.block === block;
    });
  }

  select(date, block) {
    // Empty
    if (!this.isBookingsSelected()) {
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

  isBookingsSelected() {
    return this.selectedDateBlocks.length > 0;
  }

  book() {
    if (this.isBookingsSelected()) {
      this.selectedDateBlocks.forEach(selectedDateBlock => {
        const booking: Booking = {
          ownerId: this.userService.uid,
          type: this.type,
          date: selectedDateBlock.date,
          block: selectedDateBlock.block
        };
        this.bookingService.insertBooking(booking).then(res => {
          console.log('booked', booking, res);
        }).catch(err => {
          console.log(err);
        });
      });
    }
  }
}
