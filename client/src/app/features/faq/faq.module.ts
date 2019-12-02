import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import {SharedModule} from '../../shared/shared.module';
import {FaqService} from './shared/faq.service';
import { FaqDashboardComponent } from './faq-dashboard/faq-dashboard.component';
import {FaqRoutingModule} from './faq-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [FaqComponent, FaqDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FaqRoutingModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    MatListModule
  ],
  providers: [FaqService]
})
export class FaqModule { }


