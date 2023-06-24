import { Component } from '@angular/core';

import materiales from './materiales.json';

interface MATERIALES {
  estado: String;
  asignatura: String;
  docente: String;
  proyecto: String;
  publicacion: String;
  detalles: String;
  fecha: String;
}

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.scss']
})
export class MaterialesComponent {
  Materiales:MATERIALES[]=materiales;

}
