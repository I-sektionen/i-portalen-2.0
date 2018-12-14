import { Injectable } from '@angular/core';
import { DatabaseService } from '../../core/database/database.service';
import { Organisation } from './organisation.model';
import {
  DynamicForm,
  DynamicFormField,
  DropdownFormField,
  InputFormField,
  TextAreaFormField, FileUploadFormField
} from '../../dynamic-forms/shared/dynamic-form.model';
import { DynamicFormService } from '../../dynamic-forms/shared/dynamic-form.service';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService implements DynamicForm {

  private readonly path = 'organisations'; // collection path
  private readonly imageFolder = 'organisation-images';
  private readonly iconFolder = 'organisation-icons';

  constructor(
    private databaseService: DatabaseService<Organisation>, // database service
    private dynamicFormService: DynamicFormService
  ) { }

  insertOrganisation(organisation: Organisation) {
    return this.databaseService.insert(this.path, organisation);
  }

  updateOrganisation(id, organisation: Organisation) {
    return this.databaseService.update(this.path, id, organisation);
  }

  getOrganisation(id) {
    return this.databaseService.get(this.path, id);
  }

  listOrganisations() {
    return this.databaseService.list(this.path);
  }

  deleteOrganisation(id) {
    return this.databaseService.delete(this.path, id);
  }

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
        new FileUploadFormField({
          order: 4,
          label: 'Bild',
          key: 'imageUrl',
          value: organisation ? organisation.imageUrl : '',
          validators: [Validators.required],
          folder: this.imageFolder,
          fileName: organisation ? organisation.name : '',
          color: 'primary',
        }),
        new FileUploadFormField({
          order: 5,
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
