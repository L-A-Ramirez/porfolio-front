import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from './habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private url:string=environment.UrlApi+"habilidades";

  constructor( private http:HttpClient ) { }


  //Obtener lista
  getAll():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url+"/lista");
  }

  //Crear
  create(habilidad:Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(this.url+"/create", habilidad);
  }

  //Obtener una habilidad
  get(id:number):Observable<Habilidad>{
    return this.http.get<Habilidad>(this.url+'/'+id);
  }

  //Actualizar
  update(habilidad:Habilidad):Observable<any>{
    return this.http.put<any>(this.url+"/update", habilidad);
  }

  //Eliminar
  delete(id:number):Observable<Habilidad>{
    return this.http.delete<Habilidad>(this.url+'/delete/'+id);
  }
}
