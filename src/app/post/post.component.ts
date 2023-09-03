import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {postsSalvos} from "../shared/Posts/PostsSalvos";
import {Post} from "../Interfaces/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id : number = 1
  post : Post[] = []
  curtido : boolean = false

  constructor(private router : Router, private route : ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!)
  }

  ngOnInit(): void {
    this.post = postsSalvos.filter((post)=> post.id == this.id)
  }

  curtirPost(){

    if(!this.curtido){
      this.post[0].numeroCurtidas++
      this.curtido = true
    }
  }

}
