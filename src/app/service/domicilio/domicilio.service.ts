import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Domicilio } from './domicilio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  private url:string=environment.UrlApi+"domicilios";

  constructor( private http:HttpClient ) { }


  //Obtener lista
  getAll():Observable<Domicilio[]>{
    return this.http.get<Domicilio[]>(this.url+"/lista");
  }

  //Crear
  create(domicilio:Domicilio):Observable<Domicilio>{
    return this.http.post<Domicilio>(this.url+"/create", domicilio);
  }

  //Obtener un domicilio
  get(id:number):Observable<Domicilio>{
    return this.http.get<Domicilio>(this.url+'/'+id);
  }

  //Actualizar
  update(domicilio:Domicilio):Observable<any>{
    return this.http.put<any>(this.url+"/update", domicilio);
  }

  //Eliminar
  delete(id:number):Observable<Domicilio>{
    return this.http.delete<Domicilio>(this.url+'/delete/'+id);
  }

}