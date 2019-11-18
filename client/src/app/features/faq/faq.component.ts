import { Component, OnInit } from '@angular/core';
import {Faq} from './shared/faq.model';
import {FaqService} from './shared/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq = Faq;
  category: String[] = ['1', '2'];
  questions = this.faqService.listQuestions()[0];

  constructor(
  private faqService: FaqService
  ) { }

  ngOnInit() {
  }
}
