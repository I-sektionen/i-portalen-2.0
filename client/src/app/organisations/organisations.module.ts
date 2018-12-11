import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';
import { SharedModule } from '../shared/shared.module';
import { CreateOrganisationComponent } from './create-organisation/create-organisation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [OrganisationsComponent, CreateOrganisationComponent],
  exports: [CreateOrganisationComponent],
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
  ]
})
export class OrganisationsModule { }
