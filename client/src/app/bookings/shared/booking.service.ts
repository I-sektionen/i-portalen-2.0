import { Injectable } from '@angular/core';
import { DatabaseService } from '../../core/database/database.service';
import { Booking } from './booking.model';

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

  listBookings() {
    return this.databaseService.list(this.path);
  }

  deleteBooking(id) {
    return this.databaseService.delete(this.path, id);
  }
}
