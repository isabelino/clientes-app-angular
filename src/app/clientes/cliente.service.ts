import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from './interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlBase:string="http://localhost:8087/api"

  constructor(private http:HttpClient) { }
//el metodo get para recuperar todos los clientes
  getCliente():Observable<Cliente[]>{
    return this.http.get(`${this.urlBase}/clientes`).pipe(
      map( (response) => response as Cliente[] )
    );
  }




}
