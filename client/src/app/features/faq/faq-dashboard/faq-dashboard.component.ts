import { Component, OnInit } from '@angular/core';
import {FaqQuestion} from '../shared/faq.model';
import {FaqService} from '../shared/faq.service';


@Component({
  selector: 'app-faq-dashboard',
  templateUrl: './faq-dashboard.component.html',
  styleUrls: ['./faq-dashboard.component.scss']
})
export class FaqDashboardComponent implements OnInit {

  questions: FaqQuestion [] = [];
  categorys: string[] = [];

  categories = [ 'Byta program', 'Examen och examenskrav', 'Exjobb', 'Hur fungerar det med CSN?' ];

  constructor(private faqService: FaqService) {}


  ngOnInit() {
    this.faqService.listQuestions().subscribe((questions: FaqQuestion[] ) => {
      questions.forEach((question: FaqQuestion) => {
        if (!this.categorys.includes(question.category)) {
          this.categorys.push(question.category);
        }
      });
      this.questions = questions;
    } );
  }

}
