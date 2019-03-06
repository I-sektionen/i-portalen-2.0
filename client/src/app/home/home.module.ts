import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule} from "../app-routing.module";
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatSlideToggleModule
} from "@angular/material";
import {FlexModule} from "@angular/flex-layout";

import {MatChipsModule} from '@angular/material/chips';

import {ReactiveFormsModule} from "@angular/forms";
import { HappeningCardComponent } from './happening-card/happening-card.component';
@NgModule({
  declarations: [HomeComponent, HappeningCardComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
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
    MatFormFieldModule
  ]
})
export class HomeModule { }
