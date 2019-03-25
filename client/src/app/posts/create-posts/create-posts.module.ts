import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { MatCardModule } from '@angular/material/card';
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
  MatTabsModule
} from "@angular/material";

import { CreatePostsRoutingModule } from "./create-posts-routing.module";
import { CreatePostsComponent } from "./create-posts.component";
import { PostContentComponent } from "./post-content/post-content.component";
import { LivePreviewComponent } from "./live-preview/live-preview.component";
import { MarkdownToHtmlModule } from "markdown-to-html-pipe";

@NgModule({
  declarations: [
    CreatePostsComponent,
    LivePreviewComponent,
    PostContentComponent
  ],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    CreatePostsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MarkdownToHtmlModule
  ]
})
export class CreatePostsModule {}
