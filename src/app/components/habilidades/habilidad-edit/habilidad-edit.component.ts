import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/service/habilidad/habilidad';
import { HabilidadService } from 'src/app/service/habilidad/habilidad.service';

@Component({
  selector: 'app-habilidad-edit',
  templateUrl: './habilidad-edit.component.html',
  styleUrls: ['./habilidad-edit.component.css']
})
export class HabilidadEditComponent implements OnInit {

  habilidad:Habilidad = null;

  constructor(private habilidadService: HabilidadService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.get(id).subscribe(
      data =>{
        this.habilidad = data;
      }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate():void{
    this.habilidadService.update(this.habilidad).subscribe(
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
