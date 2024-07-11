import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSupComponent } from './components/barra-sup/barra-sup.component';
import { NavComponent } from './components/nav/nav.component';
import { PresentBannerComponent } from './components/present-banner/present-banner.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { ExpComponent } from './components/exp/exp.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CarouselCertificateComponent } from './components/carousel-certificate/carousel-certificate.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { LoginComponent } from './register-login/login/login.component';
import { FormsModule } from '@angular/forms';
import { NuevaExpComponent } from './components/exp/nueva-exp/nueva-exp.component';
import { EditExpComponent } from './components/exp/edit-exp/edit-exp.component';
import { AcercaDeComponent } from './components/info-personal/acerca-de/acerca-de.component';
import { EditCursoComponent } from './components/formacion/edit-curso/edit-curso.component';
import { NuevoCursoComponent } from './components/formacion/nuevo-curso/nuevo-curso.component';
import { EditEducacionComponent } from './components/formacion/edit-educacion/edit-educacion.component';
import { HabilidadEditComponent } from './components/habilidades/habilidad-edit/habilidad-edit.component';
import { HabilidadNuevaComponent } from './components/habilidades/habilidad-nueva/habilidad-nueva.component';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSupComponent,
    NavComponent,
    PresentBannerComponent,
    InfoPersonalComponent,
    ExpComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    CarouselCertificateComponent,
    PorfolioComponent,
    RegisterLoginComponent,
    LoginComponent,
    NuevaExpComponent,
    EditExpComponent,
    AcercaDeComponent,
    EditCursoComponent,
    NuevoCursoComponent,
    EditEducacionComponent,
    HabilidadEditComponent,
    HabilidadNuevaComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}