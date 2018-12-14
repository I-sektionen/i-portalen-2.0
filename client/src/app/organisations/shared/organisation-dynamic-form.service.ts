import { Injectable } from '@angular/core';
import {
  DropdownFormField, DynamicForm, DynamicFormField, FileUploadFormField,
  InputFormField, RadioButtonFormField, TextAreaFormField
} from '../../dynamic-forms/shared/dynamic-form.model';
import { Area, Organisation } from './organisation.model';
import { Validators } from '@angular/forms';
import { DynamicFormService } from '../../dynamic-forms/shared/dynamic-form.service';
import { OrganisationService } from './organisation.service';

@Injectable({
  providedIn: 'root'
})
export class OrganisationDynamicFormService implements DynamicForm {

  private readonly imageFolder = 'organisation-images';
  private readonly iconFolder = 'organisation-icons';

  constructor(
    private dynamicFormService: DynamicFormService
  ) { }

  async getDynamicFormFields(organisation?: Organisation): Promise<DynamicFormField<any>[]> {
    return this.dynamicFormService.getUsersSelectOptions().then(usersSelectOptions => {
      return [
        new InputFormField({
          order: 1,
          label: 'Namn',
          key: 'name',
          value: organisation ? organisation.name : '',
          validators: [Validators.required],
          width: 60,
        }),
        new DropdownFormField({
          order: 2,
          label: 'Ledare',
          key: 'leader',
          value: organisation ? organisation.leader : '',
          validators: [Validators.required],
          selectOptions: usersSelectOptions,
          width: 40,
        }),
        new TextAreaFormField({
          order: 3,
          label: 'Beskrivning',
          key: 'description',
          value: organisation ? organisation.description : '',
        }),
        new RadioButtonFormField({
          order: 4,
          label: 'Område',
          key: 'area',
          value: organisation ? organisation.area : '',
          selectOptions: [
            {label: Area.External, value: Area.External},
            {label: Area.Internal, value: Area.Internal},
            {label: Area.Education, value: Area.Education},
            {label: Area.Social, value: Area.Social},
          ],
          color: 'primary',
        }),
        new FileUploadFormField({
          order: 5,
          label: 'Bild',
          key: 'imageUrl',
          value: organisation ? organisation.imageUrl : '',
          validators: [Validators.required],
          folder: this.imageFolder,
          fileName: organisation ? organisation.name : '',
          color: 'primary',
        }),
        new FileUploadFormField({
          order: 6,
          label: 'Ikon',
          key: 'iconUrl',
          value: organisation ? organisation.iconUrl : '',
          validators: [Validators.required],
          folder: this.iconFolder,
          fileName: organisation ? organisation.name : '',
          color: 'warn',
        }),
      ];
    });
  }
}
