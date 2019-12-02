import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-questansw',
  templateUrl: './questansw.component.html',
  styleUrls: ['./questansw.component.scss']
})
export class QuestanswComponent implements OnInit, OnDestroy { //Finns det bättre sätt än använda onDestroy?
  @Input() answer: String; //varför hämtar den inte in answer???
  @Input() question: String;
    x = false;
  constructor() {
    console.log(this.answer);
  }

  ngOnInit() {
  }
  click() {
    this.x = !this.x;
  }

}

