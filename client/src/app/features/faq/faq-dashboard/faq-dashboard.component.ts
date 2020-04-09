import { Component, OnInit, Input } from '@angular/core';
import { FaqQuestion} from '../shared/faq.model';

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

  clicked: false;
  questions: FaqQuestion[] = [
    {question: 'test0', answer: 'svar0'},
    {question: 'test1', answer: 'svar1'},
    {question: 'test2', answer: 'svar2'},
    {question: 'test3', answer: 'svar3'},
    {question: 'test4', answer: 'svar4'},
  ];

  constructor() { }

  ngOnInit() {
  }
  click(question: FaqQuestion) {
    const i = this.questions.findIndex((value => question === value));
    this.questions[i].clicked = !this.questions[i].clicked;
}

}


