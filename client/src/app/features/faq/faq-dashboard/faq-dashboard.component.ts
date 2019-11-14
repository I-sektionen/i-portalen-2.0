import { Component, OnInit } from '@angular/core';
import {Faq} from '../shared/faq.model';

@Component({
  selector: 'app-faq-dashboard',
  templateUrl: './faq-dashboard.component.html',
  styleUrls: ['./faq-dashboard.component.scss']
})

export class FaqDashboardComponent implements OnInit {
  faq = Faq;

  constructor() { }

  ngOnInit() {
  }

}
