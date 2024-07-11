import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/service/persona/persona';
import { PersonaService } from 'src/app/service/persona/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  info:Persona = null;

  constructor(private personaService: PersonaService,private activatedRouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.get(id).subscribe(
      data =>{
        this.info = data;
      }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(this.info).subscribe(
      data => {
        alert("info Guardada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló el edit");
        this.router.navigate(['']);
      }
    )
  }

}
