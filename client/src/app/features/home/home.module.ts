import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeroComponent } from './hero/hero.component';
import { SponsorsModule } from '../sponsors/sponsors.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule} from "../../app-routing.module";
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatSelectModule,
  MatSlideToggleModule, MatTabsModule
} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";


import {MatChipsModule} from '@angular/material/chips';

import {ReactiveFormsModule} from "@angular/forms";
import { HappeningCardComponent } from './happening-card/happening-card.component';
@NgModule({
  declarations: [HomeComponent, HeroComponent],

  exports: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    SponsorsModule,
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule,
    FlexModule,
    AppRoutingModule,
    // Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTabsModule
  ]
})
export class HomeModule { }
