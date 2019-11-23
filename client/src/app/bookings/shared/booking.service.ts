import { Injectable } from '@angular/core';
import { DatabaseService } from '../../core/database/database.service';
import { Booking, BookingType } from './booking.model';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private readonly path = 'bookings';

  constructor(
    private databaseService: DatabaseService<Booking>,
  ) { }

  insertBooking(booking: Booking) {
    return this.databaseService.insert(this.path, booking);
  }

  updateBooking(id, booking: Booking) {
    return this.databaseService.update(this.path, id, booking);
  }

  getBooking(id) {
    return this.databaseService.get(this.path, id);
  }

  listBookings(week?: number, type?: BookingType) {
    if (week) {
      const weekStart = moment().isoWeek(week).startOf('week').add(1, 'day').toDate();
      const weekEnd = moment().isoWeek(week + 1).endOf('week').add(1, 'day').toDate();
      return this.databaseService.list(this.path, ref => ref
        .where('type', '==', type)
        .where('date', '>=', weekStart)
        .where('date', '<=', weekEnd)
      );
    }
    return this.databaseService.list(this.path);
  }

  deleteBooking(id) {
    return this.databaseService.delete(this.path, id);
  }

  getDatesByWeekNumber(weekNumber) {
    const date = moment().isoWeek(weekNumber).startOf('week');
    let weekLength = 14;
    const result = [];
    while (weekLength--) {
      date.add(1, 'day');
      result.push(date.toDate());
    }
    return result;
  }
}
