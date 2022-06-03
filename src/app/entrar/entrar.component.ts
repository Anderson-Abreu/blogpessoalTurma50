import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }
entrar(){
  this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
    this.userLogin = resp

    environment.foto=this.userLogin.foto
    environment.id=this.userLogin.id
    environment.nome=this.userLogin.nome
    environment.token=this.userLogin.token

    console.log(environment.foto)
    console.log(environment.id)
    console.log(environment.nome)
    console.log(environment.token)

    this.router.navigate(['/inicio'])
    },erro=>{
      if(erro.status==500)
      {
        alert('usuario ou senha estão incorretos')
      }

  })
}
}
