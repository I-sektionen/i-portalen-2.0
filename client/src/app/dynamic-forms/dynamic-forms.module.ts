import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule
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

    // Custom
    UsersModule,
  ]
})
export class DynamicFormsModule { }
