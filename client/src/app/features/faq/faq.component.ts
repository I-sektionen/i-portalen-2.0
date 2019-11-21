import { Component, OnInit } from '@angular/core';
import {FaqQuestion} from './shared/faq.model';
import {FaqService} from './shared/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  questions: FaqQuestion[] = [];
  constructor(
  private faqService: FaqService
  ) { }

  ngOnInit() {
    this.faqService.listQuestions().subscribe((questions: FaqQuestion[]) => {
      this.questions = questions;
    });
  }

  getCategory(): String[] {
    const category: String[] = [];
    for (const cat of this.questions) {
      if (!category.includes(cat.category)) {
        category.push(cat.category);
      }
    }
    return category;
  }

}
