import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Text } from '../../core/text/text.model';
import { TextService } from '../../core/text/text.service';

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
  ) { }

  ngOnInit() {
   this.textService.getTexts().subscribe(texts => {
     if (texts && !this.texts) {
       this.texts = texts;
       for (const text of this.texts) {
         // stores original texts from first fetch from database
         this.originalTexts[text.id] = text.value;

         // creates form controls
         this.form.addControl(text.id, new FormControl(text.value, [Validators.required]));
       }
     }
   });
  }

  // checks if the text has been modified from last save
  isEdited(text: Text) {
    return this.form.get(text.id).value !== text.value;
  }

  // checks if the text has been modified from original
  isModified(text: Text) {
    return this.form.get(text.id).value !== this.originalTexts[text.id];
  }

  setCurrentText(text: Text) {
    this.currentText = {
      id: text.id,
      page: text.page,
      value: this.form.get(text.id).value,
    };
  }

  editText(text: Text) {
    if (this.isEdited(text)) {
      // update text in database with new text
      text.value = this.form.get(text.id).value;
      this.textService.upsertText(text);
    }
  }

  resetText(text: Text) {
    // update text in database with original
    text.value = this.originalTexts[text.id];
    this.textService.upsertText(text);

    // update form
    this.form.get(text.id).setValue(text.value);
  }

  deleteText(text: Text) {
    // delete text from database
    this.textService.deleteText(text.id);

    // update form with lorem
    text.value = this.textService.lorem;
    this.form.get(text.id).setValue(this.textService.lorem);
  }
}
