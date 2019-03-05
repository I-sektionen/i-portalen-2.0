import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { SharedModule } from '../shared/shared.module';
import { UpsertSponsorComponent } from './upsert-sponsor/upsert-sponsor.component';
import { SponsorService } from './shared/sponsor.service';
import { DynamicFormsModule } from '../dynamic-forms/dynamic-forms.module';

@NgModule({
  declarations: [SponsorsComponent, UpsertSponsorComponent],
  exports: [UpsertSponsorComponent],
  providers: [SponsorService],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    SharedModule,
    DynamicFormsModule,
  ]
})
export class SponsorsModule { }
