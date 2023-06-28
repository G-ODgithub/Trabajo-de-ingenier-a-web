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

  consultarId(id:any): Observable<any> {
    return this.servicio.get(`${this.server}/admin/${id}`);
  }
  consultarEmailId(email:any): Observable<any> {
    console.log(`${this.server}/${email}`)
    return this.servicio.get(`${this.server}/${email}`);
  }
   
  Registro(usuario:any): Observable<any>{
    //console.log(JSON.stringify(usuario))
    let url= `${this.server}/registrarse`
    return this.servicio.post(url,usuario)

  }



}
