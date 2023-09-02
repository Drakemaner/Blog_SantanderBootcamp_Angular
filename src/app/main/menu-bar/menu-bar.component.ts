import {Component, EventEmitter, OnInit, Output, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Output()
  filtroGenero = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  filtrar(filtro : string) {
    if(filtro == 'Política'){
      this.filtroGenero.emit('Política')
    }
    else if(filtro == 'Entreterimento'){
      this.filtroGenero.emit('Entreterimento')
    }
    else if(filtro = 'Esporte'){
      this.filtroGenero.emit('Esporte')
    }
  }

}
