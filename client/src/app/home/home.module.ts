import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeroComponent } from './hero/hero.component';
import { UpsertHeroComponent } from './hero/upsert-hero/upsert-hero.component';
import { HeroService } from './hero/shared/hero.service';
import { HeroDynamicFormService } from './hero/shared/hero-dynamic-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule } from '../dynamic-forms/dynamic-forms.module';

@NgModule({
  declarations: [HomeComponent, HeroComponent, UpsertHeroComponent],
  exports: [HomeComponent, UpsertHeroComponent],
  providers: [HeroService, HeroDynamicFormService],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MDBBootstrapModule.forRoot(),
    DynamicFormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
