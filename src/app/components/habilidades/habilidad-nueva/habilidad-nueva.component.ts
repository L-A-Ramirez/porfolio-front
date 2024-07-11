import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/service/habilidad/habilidad';
import { HabilidadService } from 'src/app/service/habilidad/habilidad.service';

@Component({
  selector: 'app-habilidad-nueva',
  templateUrl: './habilidad-nueva.component.html',
  styleUrls: ['./habilidad-nueva.component.css']
})
export class HabilidadNuevaComponent implements OnInit {

  nombre: string = "";
  porcentaje: number;

  constructor(private habilidadService: HabilidadService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const habilidad = new Habilidad(this.nombre,this.porcentaje);
    this.habilidadService.create(habilidad).subscribe(
      data=>{
        alert("Habilidad Guardada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
