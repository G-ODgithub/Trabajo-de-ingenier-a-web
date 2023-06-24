import { Component } from '@angular/core';

import anotaciones from './anotaciones.json';

interface ANOTACIONES {
  estado: String;
  profesor: String;
  asignatura: String;
  tipo: String;
  fecha: String;
  detalles: String;
}

@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.component.html',
  styleUrls: ['./anotaciones.component.scss']
})
export class AnotacionesComponent {
  Anotaciones:ANOTACIONES[]=anotaciones;
}
