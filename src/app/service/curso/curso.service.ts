import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Curso } from './curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url:string=environment.UrlApi+"cursos";

  constructor( private http:HttpClient ) { }


  //Obtener lista
  getAll():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url+"/lista");
  }

  //Crear
  create(curso:Curso):Observable<Curso>{
    return this.http.post<Curso>(this.url+"/create", curso);
  }

  //Obtener un curso
  get(id:number):Observable<Curso>{
    return this.http.get<Curso>(this.url+'/'+id);
  }

  //Actualizar
  update(curso:Curso):Observable<any>{
    return this.http.put<any>(this.url+"/update", curso);
  }

  //Eliminar
  delete(id:number):Observable<Curso>{
    return this.http.delete<Curso>(this.url+'/delete/'+id);
  }

}
