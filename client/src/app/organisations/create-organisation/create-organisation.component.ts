import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrganisationService } from '../shared/organisation.service';

@Component({
  selector: 'app-create-organisation',
  templateUrl: './create-organisation.component.html',
  styleUrls: ['./create-organisation.component.scss']
})
export class CreateOrganisationComponent implements OnInit {

  private organisationForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    leader: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private organisationService: OrganisationService,
  ) { }

  ngOnInit() {
  }

  submit() {
    this.organisationService.insertOrganisation(this.organisationForm.value).then(() => {
      console.log('Created organisation', this.organisationForm.value);
    }).catch(err => {
      console.log('Error creating organisation', err, this.organisationForm.value);
    });
  }
}
