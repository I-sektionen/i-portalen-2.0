import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatCardModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatabaseService } from './database/database.service';
import { FirebaseModule } from './firebase/firebase.module';
import { TextComponent } from './text/text.component';
import { TextService } from './text/text.service';
import { TextEditComponent } from '../admin/text-edit/text-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

@NgModule({
  declarations: [NavComponent, FooterComponent, TextComponent],
  entryComponents: [],
  exports: [NavComponent, TextComponent],
  providers: [AuthService, DatabaseService, TextService],
  imports: [
    // Angular
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    LayoutModule,
    ReactiveFormsModule,

    // Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,

    // Custom
    FirebaseModule,
    SharedModule,
    MarkdownToHtmlModule
  ]
})
export class CoreModule { }
