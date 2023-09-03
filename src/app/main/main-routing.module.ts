import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {PostModule} from "../post/post.module";
import {PostComponent} from "../post/post.component";


function retornarPostModule(){
  return PostModule
}

const routes : Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'posts/:id',
    loadChildren: retornarPostModule
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
