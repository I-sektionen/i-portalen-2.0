import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule, MatInputModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MatChipsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class HomeModule { }
