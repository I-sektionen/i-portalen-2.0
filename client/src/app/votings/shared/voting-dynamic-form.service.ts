import {Injectable} from '@angular/core';
import {DynamicForm, DynamicFormField, InputFormField} from '../../dynamic-forms/shared/dynamic-form.model';
import {Poll} from './poll.model';

@Injectable({
  providedIn: 'root'
})
export class VotingDynamicFormService implements DynamicForm {


  constructor() {
  }

  async getDynamicFormFields(voting?: Poll): Promise<DynamicFormField[]> {
    return [
      new InputFormField({
        order: 1,
        label: 'namn',
        key: 'name',
        //value: voting ? voting.name : '',
      }),
    ];
  }
}