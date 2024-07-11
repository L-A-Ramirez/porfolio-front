import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domicilio } from 'src/app/service/domicilio/domicilio';
import { DomicilioService } from 'src/app/service/domicilio/domicilio.service';
import { vistaEdad } from 'src/app/service/persona/edad/vistaEdad';
import { vistaEdadService } from 'src/app/service/persona/edad/vistaEdad.service';
import { Persona } from 'src/app/service/persona/persona';
import { PersonaService } from 'src/app/service/persona/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {

  personas: Persona[];
  domicilios!:Domicilio[];
  vistaEdad!: vistaEdad[];

  isLogged = false;

  constructor(private personaService:PersonaService, private domicilioService:DomicilioService, private vistaEdadService:vistaEdadService, private router:Router, private tokenService: TokenService) {}

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

    this.personaService.getAll().subscribe(
      p => this.personas=p
    );

    this.domicilioService.getAll().subscribe(
      d => this.domicilios=d
    );

    this.vistaEdadService.getAll().subscribe(
      e => this.vistaEdad = e
    );
  }
  
}