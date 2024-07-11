import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url:string=environment.UrlApi+"experiencias";

  constructor( private http:HttpClient ) { }

  //Obtener
  getAll():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+"/lista");
  }

  //Crear
  create(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url+"/create", experiencia);
  }

  //Obtener una experiencia
  get(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url+`/${id}`);
  }

  //Actualizar
  update(experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.url+`/update`, experiencia);
  }

  //Eliminar
  delete(id:number):Observable<Experiencia>{
    return this.http.delete<Experiencia>(this.url+`/delete/${id}`);
  }

}