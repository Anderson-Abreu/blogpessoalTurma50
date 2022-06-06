import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome=environment.nome
  foto=environment.foto
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.foto=''
    environment.id=0
    environment.nome=''
    environment.token=''

  }

}
