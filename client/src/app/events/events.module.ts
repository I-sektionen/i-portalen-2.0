import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [EventsComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
