import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import {OrganisationsRoutingModule} from '../organisations/organisations-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {FaqService} from './shared/faq.service';
import { FaqDashboardComponent } from './faq-dashboard/faq-dashboard.component';

@NgModule({
  declarations: [FaqComponent, FaqDashboardComponent],
  imports: [
    CommonModule,
    OrganisationsRoutingModule,
    SharedModule,
  ],
  providers: [FaqService]
})
export class FaqModule { }
