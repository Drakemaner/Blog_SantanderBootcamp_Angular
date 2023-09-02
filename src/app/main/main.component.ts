import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import {Post} from "../Interfaces/Post";
import {postsSalvos} from "./Posts/PostsSalvos";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  postsEsquerda : any = []
  postsDireita : any = []
  filtroGenero : string = ''
  filtroAtual : string = ''

  constructor() { }

  ngOnInit(): void {
    this.organizarPosts()
  }

  ngAfterContentChecked(){
    console.log(this.filtroGenero)
    this.filtrarPosts()

  }


  organizarPosts(){
    for (let i = 0; i < postsSalvos.length; i++){
      if(i % 2 == 0){
        this.postsEsquerda.push(postsSalvos[i])
      }
      else{
        this.postsDireita.push(postsSalvos[i])
      }
    }
  }

  receberValores(filtro : string){
    this.filtroGenero = filtro
  }
  filtrarPosts(){

    if(this.filtroAtual != this.filtroGenero){
      this.postsEsquerda = []
      this.postsDireita = []
      this.organizarPosts()
      this.postsEsquerda = this.postsEsquerda.filter((post: Post) => post.genero == this.filtroGenero)
      this.postsDireita = this.postsDireita.filter((post: Post) => post.genero == this.filtroGenero)
      this.filtroAtual = this.filtroGenero
    }
    else{
      this.postsEsquerda = []
      this.postsDireita = []
      this.organizarPosts()
      this.filtroAtual = ''
    }
  }
}
