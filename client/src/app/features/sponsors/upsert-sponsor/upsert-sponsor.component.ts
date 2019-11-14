import { Component, Input, OnChanges } from '@angular/core';
import { DynamicFormField } from '../../../shared/dynamic-forms/shared/dynamic-form.model';
import { Sponsor } from '../shared/sponsor.model';
import { SponsorService } from '../shared/sponsor.service';
import { SponsorDynamicFormService } from '../shared/sponsor-dynamic-form.service';

@Component({
  selector: 'app-upsert-sponsor',
  templateUrl: './upsert-sponsor.component.html',
  styleUrls: ['./upsert-sponsor.component.scss']
})
export class UpsertSponsorComponent implements OnChanges {

  @Input() sponsor: Sponsor;

  sponsorFormFields: DynamicFormField[];

  constructor(
    private sponsorDynamicFormService: SponsorDynamicFormService,
    private sponsorService: SponsorService
  ) { }

  ngOnChanges() {
    this.sponsorDynamicFormService.getDynamicFormFields(this.sponsor).then(formFields => {
      this.sponsorFormFields = formFields;
    });
  }

  submit(sponsor) {
    if (this.sponsor) {
      this.sponsorService.updateSponsor(this.sponsor.id, sponsor);
    } else {
      this.sponsorService.insertSponsor(sponsor);
    }
  }

}
