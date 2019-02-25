import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatCardModule } from '@angular/material/card';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule, MatSidenavModule, MatListModule
} from '@angular/material';


import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookingsComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BookingsModule { }
