import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/service/curso/curso';
import { CursoService } from 'src/app/service/curso/curso.service';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

    nombre: string = "";
    carga_horaria: string = "";
    centro:string = "";

  constructor(private cursoService: CursoService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const cursos = new Curso(this.nombre,this.carga_horaria,this.centro);
    this.cursoService.create(cursos).subscribe(
      data=>{
        alert("Experiencia Guardada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
