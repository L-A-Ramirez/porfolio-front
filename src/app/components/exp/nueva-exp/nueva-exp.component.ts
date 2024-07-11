import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/service/experiencia/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia/experiencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {

  trabajo: string = "";
  puesto: string = "";
  cargo: string = "";
  herramientas: string = "";
  referencia: string = "";

  constructor(private expService: ExperienciaService, private router: Router){}

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new Experiencia(this.trabajo, this.puesto, this.cargo, this.herramientas, this.referencia);
    this.expService.create(exp).subscribe(
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
