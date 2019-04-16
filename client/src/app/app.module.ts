import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { ArticlesModule } from './posts/articles/articles.module';
import { CreatePostsModule } from './posts/create-posts/create-posts.module';
import { EventsModule } from './posts/events/events.module';
import { OrganisationsModule } from './organisations/organisations.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { FormFieldComponent } from './form-field/form-field.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UsersRoutingModule } from './users/users-routing.module';
import { CreatePostsRoutingModule } from './posts/create-posts/create-posts-routing.module';
import { OrganisationsRoutingModule } from './organisations/organisations-routing.module';
import { SponsorsRoutingModule } from './sponsors/sponsors-routing.module';

@NgModule({
  declarations: [AppComponent, FormFieldComponent],
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
    UsersModule,
    AppRoutingModule // import this one at the bottom of all custom modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
