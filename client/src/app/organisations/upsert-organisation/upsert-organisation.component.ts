import { Component, Input, OnChanges } from '@angular/core';
import { OrganisationService } from '../shared/organisation.service';
import { DynamicFormField } from '../../dynamic-forms/shared/dynamic-form.model';
import { OrganisationDynamicFormService } from '../shared/organisation-dynamic-form.service';
import { Organisation } from '../shared/organisation.model';

@Component({
  selector: 'app-upsert-organisation',
  templateUrl: './upsert-organisation.component.html',
  styleUrls: ['./upsert-organisation.component.scss']
})
export class UpsertOrganisationComponent implements OnChanges {

  @Input() organisation: Organisation;

  organisationFormFields: DynamicFormField[];

  constructor(
    private organisationDynamicFormService: OrganisationDynamicFormService,
    private organisationService: OrganisationService
  ) { }

  ngOnChanges() {
    this.organisationDynamicFormService.getDynamicFormFields(this.organisation).then(formFields => {
      this.organisationFormFields = formFields;
    });
  }

  submit(organisation) {
    if (this.organisation) {
      this.organisationService.updateOrganisation(this.organisation.id, organisation);
    } else {
      this.organisationService.insertOrganisation(organisation);
    }
  }
}
