import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { SharedModule } from '../../shared/shared.module';
import { UpsertSponsorComponent } from './upsert-sponsor/upsert-sponsor.component';
import { SponsorService } from './shared/sponsor.service';
import { DynamicFormsModule } from '../../shared/dynamic-forms/dynamic-forms.module';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SponsorsComponent, UpsertSponsorComponent, SponsorListComponent],
  exports: [UpsertSponsorComponent, SponsorListComponent],
  providers: [SponsorService],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    SharedModule,
    DynamicFormsModule,
  ]
})
export class SponsorsModule { }
