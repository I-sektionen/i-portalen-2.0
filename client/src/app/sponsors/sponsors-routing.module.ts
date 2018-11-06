import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorsComponent } from './sponsors.component';

const routes: Routes = [
  {
    path: 'sponsors',
    component: SponsorsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
