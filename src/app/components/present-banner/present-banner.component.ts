import { Component, OnInit } from '@angular/core';
import { Domicilio } from '../../service/domicilio/domicilio';
import { DomicilioService } from '../../service/domicilio/domicilio.service';
import { Persona } from 'src/app/service/persona/persona';
import { PersonaService } from 'src/app/service/persona/persona.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-present-banner',
  templateUrl: './present-banner.component.html',
  styleUrls: ['./present-banner.component.css']
})
export class PresentBannerComponent implements OnInit {

  personas: Persona[];
  domicilios!:Domicilio[];
  speed = 200;
  speedDelete = 50;
  nombreCompleto = "Lucas Ramirez";

  constructor( private personaService:PersonaService, private domicilioService:DomicilioService) {}

  ngOnInit(): void {
    this.personaService.getAll().subscribe(
      p => this.personas=p
    );

    this.domicilioService.getAll().subscribe(
      d => this.domicilios=d
    );
    this.typeWriter();
  }

  typeWriter() {
    const element = document.getElementById('typewriter-text');
    let i = 0;
    let textoActual = '';
    const type = () => {
      if (i < this.nombreCompleto.length) {
        textoActual += this.nombreCompleto.charAt(i);
        element.innerHTML = textoActual;
        i++;
        clearTimeout
        setTimeout(type, this.speed);
      } else {
        const deleteText = () => {
          if (textoActual.length > 0) {
            textoActual = textoActual.substring(0, textoActual.length - 1);
            element.innerHTML = textoActual;
            setTimeout(deleteText, this.speedDelete);
          } else {
            setTimeout(() => {
              this.typeWriter(); // Llamar a la función typeWriter() de nuevo
            }, 500); // Esperar 2 segundos antes de borrar y volver a escribir
          }
        };
        deleteText();
      }
    };
    type();
  }

}