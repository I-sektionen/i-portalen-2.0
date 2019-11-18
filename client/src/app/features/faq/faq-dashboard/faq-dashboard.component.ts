import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-faq-dashboard',
  templateUrl: './faq-dashboard.component.html',
  styleUrls: ['./faq-dashboard.component.scss']
})



export class FaqDashboardComponent implements OnInit {



  answers: [{'svar 1', 'svar 2', 'svar 3'}];
  questions: [{'fråga 1', 'fråga 2', 'fråga 3'}]

  questions = [{question: [], answers: []}];
  subjects = [{question: []}];


  constructor() { }

  ngOnInit() {
  }

}
