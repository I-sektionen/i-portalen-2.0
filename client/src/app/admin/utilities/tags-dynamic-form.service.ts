import {Injectable} from '@angular/core';
import {DynamicFormService} from '../../dynamic-forms/shared/dynamic-form.service';
import {DynamicFormField, InputFormField} from '../../dynamic-forms/shared/dynamic-form.model';
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
        })];
    });
  }
}
