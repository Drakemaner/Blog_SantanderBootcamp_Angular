import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CardsComponent } from './cards/cards.component';
import { PostComponent } from './post/post.component';




@NgModule({
  declarations: [
    IntroComponent,
    MenuBarComponent,
    MainComponent,
    CardsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
