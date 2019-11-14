import { Injectable } from '@angular/core';
import {
  DynamicForm, DynamicFormField, FileUploadFormField,
  InputFormField
} from '../../../shared/dynamic-forms/shared/dynamic-form.model';
import { Sponsor } from './sponsor.model';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SponsorDynamicFormService implements DynamicForm {

  private readonly logoFolder = 'sponsor-logos';

  constructor() { }

  async getDynamicFormFields(sponsor?: Sponsor): Promise<DynamicFormField[]> {
    return [
      new InputFormField({
        order: 1,
        label: 'Företagsnamn',
        key: 'name',
        value: sponsor ? sponsor.name : '',
        validators: [Validators.required],
        disabled: !!sponsor,
      }),
      new InputFormField({
        order: 2,
        label: 'Webbsida',
        key: 'websiteUrl',
        value: sponsor ? sponsor.websiteUrl : '',
        validators: [Validators.required],
      }),
      new FileUploadFormField({
        order: 5,
        label: 'Bild',
        key: 'logoUrl',
        value: sponsor ? sponsor.logoUrl : '',
        validators: [Validators.required],
        folder: this.logoFolder,
        fileName: sponsor ? sponsor.name : '',
      }),
    ];
  }
}
