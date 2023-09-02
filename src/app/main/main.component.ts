import { Component, OnInit } from '@angular/core';
import {Post} from "../Interfaces/Post";
import {postsSalvos} from "./Posts/PostsSalvos";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  postsEsquerda : any = []
  postsDireita : any = []


  constructor() { }

  ngOnInit(): void {
    this.organizarPosts()
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

}
