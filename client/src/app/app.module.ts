import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { ArticlesModule } from './articles/articles.module';
import { BookingsModule } from './bookings/bookings.module';
import { EventsModule } from './events/events.module';
import { OrganisationsModule } from './organisations/organisations.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { FormFieldComponent } from './form-field/form-field.component';
import {AdminRoutingModule} from "./admin/admin-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,

    //temp
    AdminRoutingModule,

    // Custom Modules
    CoreModule,
    SharedModule,
    HomeModule,
    AdminModule,
    ArticlesModule,
    BookingsModule,
    EventsModule,
    OrganisationsModule,
    SponsorsModule,
    UsersModule,
    AppRoutingModule, // import this one at the bottom of all custom modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
