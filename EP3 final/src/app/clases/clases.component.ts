import { Component } from '@angular/core';

import clases from './clases.json';

interface CLASES {
  estado: String;
  titulo: String;
  publicacion: String;
  detalles: String;
  fechas: String;
}

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent {
  Clases:CLASES[]=clases;
}
