import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persona } from './persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url:string=environment.UrlApi+"personas";

  constructor( private http:HttpClient ) { }

  //Obtener lista
  getAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+"/lista");
  }

  //Crear
  create(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url+"/create", Persona);
  }

  //Obtener una persona
  get(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url+'/'+id);
  }

  //Actualizar
  update(persona:Persona):Observable<any>{
    return this.http.put<any>(this.url+"/update", persona);
  }

  //Eliminar
  delete(id:number):Observable<Persona>{
    return this.http.delete<Persona>(this.url+'/delete/'+id);
  }

}
