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
  MatChipsModule
} from '@angular/material';

import { CreatePostsRoutingModule } from './create-posts-routing.module';
import { CreatePostsComponent } from './create-posts.component';
import { AttributesComponent } from './attributes/attributes.component';
import { PostContentComponent } from './post-content/post-content.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

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
    FormsModule
  ]
})
export class CreatePostsModule {}
