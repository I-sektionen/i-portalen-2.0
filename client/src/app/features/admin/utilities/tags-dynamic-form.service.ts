import {Injectable} from '@angular/core';
import {DynamicFormService} from '../../../shared/dynamic-forms/shared/dynamic-form.service';
import {DynamicFormField, InputFormField} from '../../../shared/dynamic-forms/shared/dynamic-form.model';
import {Validators} from '@angular/forms';
import {Tag} from './tags.service';

@Injectable({
  providedIn: 'root'
})
export class TagsDynamicFormService {

  constructor(private dynamicFormService: DynamicFormService) {
  }

  async getDynamicFormFields(tag?: Tag): Promise<DynamicFormField[]> {
    return this.dynamicFormService.getUsersSelectOptions().then(usersSelectOptions => {
      return [
        new InputFormField({
          order: 1,
          label: 'Namn',
          key: 'name',
          value: tag ? tag.name : '',
          validators: [Validators.required],
          disabled: !!tag,
          width: 60,
        }),
        new InputFormField({
          order: 2,
          label: 'Färg (hex)',
          key: 'color',
          value: tag ? tag.color : '5A7A22',
          validators: [Validators.required],
          disabled: false,
          width: 60,
        })];
    });
  }
}
