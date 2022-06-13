import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  /*token = { 
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
*/

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://backendblogpessoal.herokuapp.com/usuarios/logar',userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://backendblogpessoal.herokuapp.com/usuarios/cadastrar',user)

  }

 /* editar(user: User): Observable<User>{
    return this.http.put<User>('https://backendblogpessoal.herokuapp.com/usuarios/atualizar',user, this.token)

  }
*/

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://backendblogpessoal.herokuapp.com/usuarios/${id}`)
  }

 logado(){
    let ok: boolean = false
    if(environment.token !=''){
      ok=true
    }
    return ok
  }
}
