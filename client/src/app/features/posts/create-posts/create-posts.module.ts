import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatOptionModule,
  MatSelectModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatDatepickerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CreatePostsRoutingModule } from './create-posts-routing.module';
import { CreatePostsComponent } from './create-posts.component';
import { AttributesComponent } from './attributes/attributes.component';
import { PostContentComponent } from './post-content/post-content.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    CreatePostsComponent,
    LivePreviewComponent,
    PostContentComponent,
    AttributesComponent
  ],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    CreatePostsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MarkdownToHtmlModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FlexLayoutModule
  ]
})
export class CreatePostsModule {}
