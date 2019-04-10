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
import {UsersRoutingModule} from "./users/users-routing.module";
import {ArticlesRoutingModule} from "./articles/articles-routing.module";
import {OrganisationsRoutingModule} from "./organisations/organisations-routing.module";
import {SponsorsRoutingModule} from "./sponsors/sponsors-routing.module";
import {BookingsRoutingModule} from "./bookings/bookings-routing.module";
import {EventsRoutingModule} from "./events/events-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,

    // Temporary router fix
    AdminRoutingModule,
    UsersRoutingModule,
    ArticlesRoutingModule,
    OrganisationsRoutingModule,
    SponsorsRoutingModule,
    BookingsRoutingModule,
    EventsRoutingModule,

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
