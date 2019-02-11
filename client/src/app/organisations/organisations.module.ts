import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule, MatListModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';
import { OrganisationsListComponent } from './organisations-list-component/organisations.list.component'
import { SingleOrganisationComponent } from './single-organisation-component/single.organisation.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule } from '../dynamic-forms/dynamic-forms.module';
import { UpsertOrganisationComponent } from './upsert-organisation/upsert-organisation.component';
import { OrganisationService } from './shared/organisation.service';
import { OrganisationDynamicFormService } from './shared/organisation-dynamic-form.service';

@NgModule({
  declarations: [OrganisationsComponent, UpsertOrganisationComponent, SingleOrganisationComponent, OrganisationsListComponent, CardComponent],
  exports: [UpsertOrganisationComponent],
  providers: [OrganisationService, OrganisationDynamicFormService],
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
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    DynamicFormsModule
  ]
})
export class OrganisationsModule { }
