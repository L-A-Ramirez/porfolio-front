import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/service/curso/curso';
import { CursoService } from 'src/app/service/curso/curso.service';
import { Educacion } from 'src/app/service/educacion/educacion';
import { EducacionService } from 'src/app/service/educacion/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
})
export class FormacionComponent implements OnInit {

  curso!:Curso[];
  educacion!:Educacion[];
  isLogged = false;

  constructor( private cursoService:CursoService, private educacionService:EducacionService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    this.cargarRegistrosCursos();

    this.cargarRegistrosEducacion();
  }

  cargarRegistrosCursos(): void {
    this.cursoService.getAll().subscribe(
      data => {
        this.curso = data;
      },
      error => {
        console.error('Ha ocurrido un error: ', error);
      }
    );
  }

  cargarRegistrosEducacion(): void {
    this.educacionService.getAll().subscribe(
      data => {
        this.educacion = data;
      },
      error => {
        console.error('Ha ocurrido un error: ', error);
      }
    );
  }

  deleteCurso(id?: number): void {
    if (id != undefined) {
      this.cursoService.delete(id).subscribe(
        data => {
          console.log('Registro eliminado correctamente');
          alert("Registro eliminado correctamente");
          this.cargarRegistrosCursos();
        },
        error => {
          console.error('Ha ocurrido un error: ', error);
          alert("No se eliminó correctamente");
        }
      );
    }
  }

  deleteEducacion(id?: number): void {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        data => {
          console.log('Registro eliminado correctamente');
          this.cargarRegistrosEducacion();
        },
        error => {
          console.error('Ha ocurrido un error: ', error);
        }
      );
    }
  }

}
