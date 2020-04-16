import {Injectable} from '@angular/core';
import {
  DropdownFormField,
  DynamicForm,
  DynamicFormField,
  InputFormField,
  TextAreaFormField
} from '../../dynamic-forms/shared/dynamic-form.model';
import {Poll} from './poll.model';
import {Validators} from '@angular/forms';
import {DynamicFormService} from '../../dynamic-forms/shared/dynamic-form.service';

@Injectable({
  providedIn: 'root'
})
export class VotingDynamicFormService implements DynamicForm {


  constructor(private dynamicFormService: DynamicFormService) {
  }

  async getDynamicFormFields(voting?: Poll): Promise<DynamicFormField[]> {
    return this.dynamicFormService.getEventSelectOptions().then(eventsSelectOptions => {
      return [
        new InputFormField({
          order: 1,
          label: 'namn',
          key: 'name',
          // value: voting ? voting.name : '',
        }),
        new TextAreaFormField({
          order: 2,
          label: 'Beskrivning',
          key: 'desc',
        }),
        new DropdownFormField({
          order: 3,
          label: 'Event',
          key: 'event',
          value: voting ? voting.event : '',
          validators: [Validators.required],
          selectOptions: eventsSelectOptions,
          width: 40,
        })
      ];
    });
  }
}
