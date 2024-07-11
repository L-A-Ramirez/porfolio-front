import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { LoginComponent } from './register-login/login/login.component';
import { NuevaExpComponent } from './components/exp/nueva-exp/nueva-exp.component';
import { EditExpComponent } from './components/exp/edit-exp/edit-exp.component';
import { AcercaDeComponent } from './components/info-personal/acerca-de/acerca-de.component';
import { EditCursoComponent } from './components/formacion/edit-curso/edit-curso.component';
import { EditEducacionComponent } from './components/formacion/edit-educacion/edit-educacion.component';
import { NuevoCursoComponent } from './components/formacion/nuevo-curso/nuevo-curso.component';
import { HabilidadEditComponent } from './components/habilidades/habilidad-edit/habilidad-edit.component';
import { HabilidadNuevaComponent } from './components/habilidades/habilidad-nueva/habilidad-nueva.component';

const routes: Routes = [
  {path: '', component:PorfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaExp', component: NuevaExpComponent},
  {path: 'editExp/:id', component: EditExpComponent},
  {path: 'editAcerca/:id', component: AcercaDeComponent},
  {path: 'editCurso/:id', component: EditCursoComponent},
  {path: 'nuevoCurso', component: NuevoCursoComponent},
  {path: 'editEducacion/:id', component:EditEducacionComponent},
  {path: 'habilidadEdit/:id',component:HabilidadEditComponent},
  {path: 'habilidadNueva',component:HabilidadNuevaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


