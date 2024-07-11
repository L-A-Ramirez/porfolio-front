import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { vistaEdad } from './vistaEdad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class vistaEdadService {

  private url:string=environment.UrlApi+"edad";

  constructor( private http:HttpClient ) { }

  //Obtener lista
  getAll():Observable<vistaEdad[]>{
    return this.http.get<vistaEdad[]>(this.url+"/lista");
  }
}
