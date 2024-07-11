import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/service/habilidad/habilidad';
import { HabilidadService } from 'src/app/service/habilidad/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad!:Habilidad[];
  isLogged = false;


  constructor(private habilidadService:HabilidadService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    this.cargarRegistros();
  }

  cargarRegistros(): void {
    this.habilidadService.getAll().subscribe(
      data => {
        this.habilidad = data;
      },
      error => {
        console.error('Ha ocurrido un error: ', error);
      }
    );
  }

  deleteHabilidad(id?: number): void {
    if (id != undefined) {
      this.habilidadService.delete(id).subscribe(
        data => {
          console.log('Registro eliminado correctamente');
          alert("Registro eliminado correctamente");
          this.cargarRegistros();
        },
        error => {
          console.error('Ha ocurrido un error: ', error);
          alert("No se eliminó correctamente");
        }
      );
    }
  }

}
