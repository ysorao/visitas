import { Visita } from './../modelos/visitas';
import { Usuario } from './../modelos/usuarios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  

  constructor( private http: HttpClient) { }

  public getUsers():Observable<Usuario[]> {
    return  this.http.get<Usuario[]>('http://heon.ml/backvt/public/api/usuarios');
  }

  public getVisitas():Observable<Visita[]> {
    return  this.http.get<Visita[]>('http://heon.ml/backvt/public/api/visita');
  }
    
}
