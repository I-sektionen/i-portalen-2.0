import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-dashboard',
  templateUrl: './faq-dashboard.component.html',
  styleUrls: ['./faq-dashboard.component.scss']
})
export class FaqDashboardComponent implements OnInit {
  //x = false;
  test_1: String = 'Svar 1';
  test_2: String = 'Svar 2';
  fraga_1: String = 'Fråga 1';
  fraga_2: String = 'Fråga 2';
  constructor() {
    //console.log(this.answer);
  }

  ngOnInit() {
  }
 //click() {
   // this.x = !this.x;
 //}




}


