import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class HomeModule { }
