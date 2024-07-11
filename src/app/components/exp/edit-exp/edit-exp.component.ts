import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/service/experiencia/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia/experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  expLab:Experiencia = null;

  constructor(private expService: ExperienciaService,private activatedRouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.get(id).subscribe(
      data =>{
        this.expLab = data;
      }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate():void{
    this.expService.update(this.expLab).subscribe(
      data => {
        alert("Experiencia Guardada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló el edit");
        this.router.navigate(['']);
      }
    )
  }
}