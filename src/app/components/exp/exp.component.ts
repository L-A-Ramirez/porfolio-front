import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../service/experiencia/experiencia';
import { ExperienciaService } from '../../service/experiencia/experiencia.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html'
})
export class ExpComponent implements OnInit {

  experiencias!:Experiencia[];

  isLogged = false;

  constructor(private experienciaService:ExperienciaService, private router:Router, private tokenService: TokenService) {}

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    /*this.experienciaService.getAll().subscribe(
      e => this.experiencias=e
    );*/

    this.cargarRegistros();
  }

  cargarRegistros(): void {
    this.experienciaService.getAll().subscribe(
      data => {
        this.experiencias = data;
      },
      error => {
        console.error('Ha ocurrido un error: ', error);
      }
    );
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          console.log('Registro eliminado correctamente');
          this.cargarRegistros();
        },
        error => {
          console.error('Ha ocurrido un error: ', error);
        }
      );
    }
  }

}