import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { DynamicFormsModule } from '../dynamic-forms/dynamic-forms.module';
import { UpsertOrganisationComponent } from './upsert-organisation/upsert-organisation.component';

@NgModule({
  declarations: [OrganisationsComponent, UpsertOrganisationComponent],
  exports: [UpsertOrganisationComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Material
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,

    // Custom
    OrganisationsRoutingModule,
    SharedModule,
    DynamicFormsModule,
  ]
})
export class OrganisationsModule { }
