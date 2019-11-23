import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-booking-week',
  templateUrl: './booking-week.component.html',
  styleUrls: ['./booking-week.component.scss']
})
export class BookingWeekComponent implements OnInit {

  @Input() week: number;
  @Output() weekChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  prevWeek() {
    this.week--;
    this.updateWeek();
  }

  nextWeek() {
    this.week++;
    this.updateWeek();
  }

  updateWeek() {
    if (this.week === 0) { this.week = 52; }
    this.week %= 53;
    this.weekChange.emit(this.week);
  }

}
