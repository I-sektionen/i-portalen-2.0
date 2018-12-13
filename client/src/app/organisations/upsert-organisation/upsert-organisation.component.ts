import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../shared/organisation.service';
import { DynamicFormField } from '../../dynamic-forms/shared/dynamic-form.model';

@Component({
  selector: 'app-upsert-organisation',
  templateUrl: './upsert-organisation.component.html',
  styleUrls: ['./upsert-organisation.component.scss']
})
export class UpsertOrganisationComponent implements OnInit {

  organisationFormFields: DynamicFormField<any>[];

  constructor(
    private organisationService: OrganisationService,
  ) { }

  ngOnInit() {
    this.organisationService.getDynamicFormFields().then(formFields => {
      this.organisationFormFields = formFields;
    });
  }

  submit(organisation) {
    this.organisationService.insertOrganisation(organisation).then(() => {
      console.log('Created organisation', organisation);
    }).catch(err => {
      console.log('Error creating organisation', err, organisation);
    });
  }
}
