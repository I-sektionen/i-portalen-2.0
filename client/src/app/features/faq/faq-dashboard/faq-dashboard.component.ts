import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-dashboard',
  templateUrl: './faq-dashboard.component.html',
  styleUrls: ['./faq-dashboard.component.scss']
})
export class FaqDashboardComponent implements OnInit {
  x = false;
  constructor() { }

  ngOnInit() {
  }
 click() {
    this.x = !this.x;
 }

}


