import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-faq-dashboard',
  templateUrl: './faq-dashboard.component.html',
  styleUrls: ['./faq-dashboard.component.scss']
})

export class FaqDashboardComponent implements OnInit {

  panelOpenState = false;

  subjects = [
    {subject: 'Ämne 1'},
    {subject: 'Ämne 2'},
    {subject: 'Ämne 3'}
    ];

  questions = [
    {
      question: 'Fråga 1',
      answer: 'Svar 1'
    },
    {
      question: 'Fråga 2',
      answer: 'Svar 2'
    },
    {
      question: 'Fråga 3',
      answer: 'Svar 3'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

