import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import { FormFieldComponent } from './form-field/form-field.component';
import { UsersModule } from '../users/users.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DynamicFormComponent, FormFieldComponent],
  exports: [DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // Material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,

    // Custom
    UsersModule,
  ]
})
export class DynamicFormsModule { }
