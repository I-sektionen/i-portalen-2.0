import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from './faq.component';
import {FaqDashboardComponent} from './faq-dashboard/faq-dashboard.component';

const routes: Routes = [
  {
    path: 'faq',
    component: FaqComponent,
    children: [
      {path: '', component: FaqDashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
