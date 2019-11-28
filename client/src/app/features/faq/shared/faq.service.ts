import { Injectable } from '@angular/core';
import {DatabaseService} from '../../../core/database/database.service';
import {FaqQuestion} from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private readonly path = 'faq';
  constructor(
    private databaseService: DatabaseService<FaqQuestion>
  ) { }

  listQuestions() {
    return this.databaseService.list(this.path);
  }

  deleteQuestion(id) {
    return this.databaseService.delete(this.path, id);
  }

  updateQuestion(id, question: FaqQuestion) {
    return this.databaseService.update(this.path, id, question);
  }
}
