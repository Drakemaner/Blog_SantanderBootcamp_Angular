import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {PostComponent} from "./post/post.component";


const routes : Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
