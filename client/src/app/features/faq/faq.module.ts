import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import {OrganisationsRoutingModule} from '../organisations/organisations-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {FaqService} from './shared/faq.service';
import { FaqDashboardComponent } from './faq-dashboard/faq-dashboard.component';
import {FaqRoutingModule} from './faq-routing.module';

@NgModule({
  declarations: [FaqComponent, FaqDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FaqRoutingModule
  ],
  providers: [FaqService]
})
export class FaqModule { }


