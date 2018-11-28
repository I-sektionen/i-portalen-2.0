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
  MatMenuModule, MatDialogModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatabaseService } from './database/database.service';
import { FirebaseModule } from './firebase/firebase.module';
import {UsersModule} from "../users/users.module";

@NgModule({
  declarations: [NavComponent, FooterComponent],
  exports: [NavComponent],
  providers: [AuthService, DatabaseService],
  imports: [
    // Angular
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    LayoutModule,

    // Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,

    // Custom
    FirebaseModule,
    UsersModule,
  ]
})
export class CoreModule { }
