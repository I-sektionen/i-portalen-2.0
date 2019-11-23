import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { AuthGuard } from '../../core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'bookings',
    component: BookingsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
