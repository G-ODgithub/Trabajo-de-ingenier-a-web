import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {

  server = "http://127.0.0.1:3000"

  constructor(private servicio: HttpClient) {
  }

  Consultar(): Observable<any> {
    return this.servicio.get(`${this.server}`);
  }

   
  Registro(usuario:any): Observable<any>{
    //console.log(JSON.stringify(usuario))
    let url= `${this.server}/registrarse`
    return this.servicio.post(url,usuario)

  }

}
