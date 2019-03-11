import { Injectable } from '@angular/core';
import {
  DatePickerFormField,
  DropdownFormField, DynamicForm, DynamicFormField, FileUploadFormField,
  InputFormField, RadioButtonFormField, TextAreaFormField
} from '../../../dynamic-forms/shared/dynamic-form.model';
import { Hero } from './hero.model';
import { Validators } from '@angular/forms';
import { DynamicFormService } from '../../../dynamic-forms/shared/dynamic-form.service';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroDynamicFormService implements DynamicForm {

  private readonly imageFolder = 'hero-images';

  constructor(
    private dynamicFormService: DynamicFormService
  ) { }

  async getDynamicFormFields(hero?: Hero): Promise<DynamicFormField[]> {
    return this.dynamicFormService.getUsersSelectOptions().then(usersSelectOptions => {
      return [
        new InputFormField({
          order: 1,
          label: 'Namn',
          key: 'name',
          value: hero ? hero.name : '',
          validators: [Validators.required],
          disabled: !!hero,
          width: 60,
        }),
        new TextAreaFormField({
          order: 2,
          label: 'Länk',
          key: 'linkUrl',
          value: hero ? hero.linkUrl : '',
        }),
        new FileUploadFormField({
          order: 3,
          label: 'Bild',
          key: 'imageUrl',
          value: hero ? hero.imageUrl : '',
          validators: [Validators.required],
          folder: this.imageFolder,
          fileName: hero ? hero.name : '',
        })
      ];
    });
  }
}
