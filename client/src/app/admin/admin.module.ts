import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { TextEditComponent } from './text-edit/text-edit.component';
import {
  MatCardModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AdminComponent, TextEditComponent],
  exports: [],
  providers: [],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // Custom
    AdminRoutingModule,
    SharedModule,
    CoreModule,

    // Material
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,

    // Other
    MarkdownToHtmlModule,
  ]
})
export class AdminModule { }
