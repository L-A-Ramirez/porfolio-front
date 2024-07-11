import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/service/curso/curso';
import { CursoService } from 'src/app/service/curso/curso.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  curso:Curso = null;

  constructor(private cursoService: CursoService,private activatedRouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoService.get(id).subscribe(
      data =>{
        this.curso = data;
      }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate():void{
    this.cursoService.update(this.curso).subscribe(
      data => {
        alert("Curso Actualizado");
        this.router.navigate(['']);
      }, err => {
        alert("Falló el edit");
        this.router.navigate(['']);
      }
    )
  }

}
