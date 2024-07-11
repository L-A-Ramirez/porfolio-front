import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Educacion } from './educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url:string=environment.UrlApi+"educacion";

  constructor( private http:HttpClient ) { }


  //Obtener
  getAll():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url+"/lista");
  }

  //Crear
  create(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.url+"/create", educacion);
  }

  //Obtener una educacion
  get(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url+'/'+id);
  }

  //Actualizar
  update(educacion:Educacion):Observable<any>{
    return this.http.put<any>(this.url+"/update", educacion);
  }

  //Eliminar educacion
  delete(id:number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.url+'/delete/'+id);
  }

}