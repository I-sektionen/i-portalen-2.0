import {Component, Input, OnInit} from '@angular/core';
import {article} from '../home.component';

@Component({
  selector: 'happening-card',
  templateUrl: './happening-card.component.html',
  styleUrls: ['./happening-card.component.scss']
})
export class HappeningCardComponent implements OnInit {
  @Input() article: article;

  constructor() {
  }

  ngOnInit() {
  }



}
