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
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';
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
    MarkdownToHtmlModule,

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
    UsersModule,
  ]
})
export class CoreModule { }
