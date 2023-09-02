import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../Interfaces/Post";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  posts? : Post[]

  constructor() { }

  ngOnInit(): void {
  }

}
