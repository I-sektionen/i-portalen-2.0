import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingType } from '../shared/booking.model';

@Component({
  selector: 'app-booking-type',
  templateUrl: './booking-type.component.html',
  styleUrls: ['./booking-type.component.scss']
})
export class BookingTypeComponent implements OnInit {

  bookingTypes = BookingType;
  @Input() type: BookingType;
  @Output() typeChange: EventEmitter<BookingType> = new EventEmitter<BookingType>();

  constructor() { }

  ngOnInit() {
  }

  updateType() {
    this.typeChange.emit(this.type);
  }
}
