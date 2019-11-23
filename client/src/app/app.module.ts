import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {FaqRoutingModule} from './features/faq/faq-routing.module';
import {FaqModule} from './features/faq/faq.module';
import {BookingsRoutingModule} from './features/bookings/bookings-routing.module';
import {BookingsModule} from './features/bookings/bookings.module';
import {UsersRoutingModule} from './features/users/users-routing.module';
import {CreatePostsRoutingModule} from './features/posts/create-posts/create-posts-routing.module';
import {HomeModule} from './features/home/home.module';
import {SponsorsRoutingModule} from './features/sponsors/sponsors-routing.module';
import {UsersModule} from './features/users/users.module';
import {AdminModule} from './features/admin/admin.module';
import {SponsorsModule} from './features/sponsors/sponsors.module';
import {ArticlesModule} from './features/posts/articles/articles.module';
import {EventsModule} from './features/posts/events/events.module';
import {OrganisationsRoutingModule} from './features/organisations/organisations-routing.module';
import {OrganisationsModule} from './features/organisations/organisations.module';
import {AdminRoutingModule} from './features/admin/admin-routing.module';
import {CreatePostsModule} from './features/posts/create-posts/create-posts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,

    // Temporary router fix
    AdminRoutingModule,
    UsersRoutingModule,
    CreatePostsRoutingModule,
    OrganisationsRoutingModule,
    SponsorsRoutingModule,
    FaqRoutingModule,
    BookingsRoutingModule,

    // Custom Modules
    CoreModule,
    SharedModule,
    HomeModule,
    AdminModule,
    ArticlesModule,
    CreatePostsModule,
    EventsModule,
    OrganisationsModule,
    SponsorsModule,
    BookingsModule,
    UsersModule,
    FaqModule,
    AppRoutingModule, // import this one at the bottom of all custom modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
