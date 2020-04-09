import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatTreeModule, MatInputModule, MatSelectModule, MatRadioModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TreeComponent } from './tree/tree.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { GroupByPipe } from './pipes/group-by.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { ShufflePipe } from './pipes/shuffle.pipe';
import {HappeningCardComponent} from "../features/home/happening-card/happening-card.component";
import { FilterPostTitlePipe } from './pipes/title-filter.pipe';
import { TagFilterPipe } from './pipes/tag-filter.pipe';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DragDropComponent,
    DashboardComponent,
    TreeComponent,
    AddressFormComponent,
    TableComponent,
    HappeningCardComponent,

    // Pipes
    GroupByPipe,
    SafePipe,
    ShufflePipe,
    FilterPostTitlePipe,
    TagFilterPipe
  ],
  exports: [
    PageNotFoundComponent,
    DragDropComponent,
    DashboardComponent,
    HappeningCardComponent,
    TreeComponent,
    AddressFormComponent,
    TableComponent,
    GroupByPipe,
    SafePipe,
    ShufflePipe,
    FilterPostTitlePipe,
    TagFilterPipe
  ],
  providers: [],
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class SharedModule { }
