import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'happening-card',
  templateUrl: './happening-card.component.html',
  styleUrls: ['./happening-card.component.scss']
})
export class HappeningCardComponent implements OnInit {
  @Input("articleName") articleName: string;

  constructor() { }

  ngOnInit() {
  }

}
