import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {PostDetailsComponent} from './post-details/post-details.component';

const routes: Routes = [
 // {path:'article/:id', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
