import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

import { CreatePostsRoutingModule } from './create-posts/create-posts-routing.module';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { AttributesComponent } from './create-posts/attributes/attributes.component';
import { PostContentComponent } from './create-posts/post-content/post-content.component';
import { LivePreviewComponent } from './create-posts/live-preview/live-preview.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {ApprovePostComponent} from './approve-post/approve-post.component';
import {SharedModule} from '../../shared/shared.module';
import { ApprovePostDetailsComponent } from './approve-post/approve-post-details/approve-post-details.component';
import { PostRevisionComponent } from './approve-post/post-revision/post-revision.component';

@NgModule({
  declarations: [
    CreatePostsComponent,
    LivePreviewComponent,
    PostContentComponent,
    AttributesComponent,
    ApprovePostComponent,
    ApprovePostDetailsComponent,
    PostRevisionComponent
  ],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    CreatePostsRoutingModule,
    SharedModule,
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
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  entryComponents: [PostRevisionComponent]
})
export class CreatePostsModule {}
