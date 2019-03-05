import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatCardModule } from '@angular/material/card';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule, MatSidenavModule, MatListModule,
  MatTabsModule,
} from '@angular/material';


import { CreatePostsRoutingModule } from './create-posts-routing.module';
import { CreatePostsComponent } from './create-posts.component';

@NgModule({
  declarations: [CreatePostsComponent],
  exports: [],
  providers: [],
  imports: [
    CommonModule,
    CreatePostsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
  ]
})
export class CreatePostsModule { }
