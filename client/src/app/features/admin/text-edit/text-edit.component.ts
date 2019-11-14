import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Text } from '../../../core/text/text.model';
import { TextService } from '../../../core/text/text.service';
import { FeedbackService } from '../../../core/feedback/feedback.service';
import { FeedbackMessage, FeedbackType } from '../../../core/feedback/feedback.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.scss']
})
export class TextEditComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  texts: Text[];
  originalTexts = {};
  currentText: Text;

  constructor(
    private textService: TextService,
    private feedbackService: FeedbackService,
  ) { }

  ngOnInit() {
   this.textService.getTexts().pipe(
     take(1),
   ).subscribe(texts => {
     if (texts && !this.texts) {
       this.texts = texts;
       for (const text of this.texts) {

         // stores original texts from first fetch for potential reset
         this.originalTexts[text.id] = text.value;

         // creates form controls
         this.form.addControl(text.id, new FormControl(text.value));
       }
     }
   });
  }

  // checks if the text has been edited from last save
  isEdited(text: Text) {
    return this.form.get(text.id).value !== text.value;
  }

  // checks if the text has been modified from original
  isModified(text: Text) {
    return this.form.get(text.id).value !== this.originalTexts[text.id];
  }

  // set current text for editor
  setCurrentText(text: Text) {
    this.currentText = {
      id: text.id,
      page: text.page,
      value: this.form.get(text.id).value,
    };
  }

  async editText(text: Text) {
    // save original text for potential undo
    const oldText = Object.assign({}, text);

    // update text in database with new text
    text.value = this.form.get(text.id).value;
    await this.textService.upsertText(text);

    // give feedback with ability to undo edit
    this.feedbackService.message(
      {message: FeedbackMessage.TextEdit, type: FeedbackType.Default, actionText: 'Ångra'}
    ).subscribe(() => {
      // undo update
      text.value = oldText.value;
      this.form.get(text.id).setValue(text.value);
      this.textService.upsertText(text);
    });
  }

  resetText(text: Text) {
    // set text to original value
    text.value = this.originalTexts[text.id];

    // update text in database with original
    this.textService.upsertText(text);

    // update form
    this.form.get(text.id).setValue(text.value);
  }

  deleteText(text: Text) {
    // delete text from database
    this.textService.deleteText(text.id).then(() => {
        // update form with lorem
        text.value = this.textService.lorem;
        this.form.get(text.id).setValue(this.textService.lorem);
      }
    );
  }
}
