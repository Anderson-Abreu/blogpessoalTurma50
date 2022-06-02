import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'',redirectTo:'entrar',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
