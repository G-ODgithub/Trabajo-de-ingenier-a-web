import { Component } from '@angular/core';

import notas from './notas.json';

interface NOTAS {
  evaluacion: String;
  nota: Number;
  promedio: Number;
  mejor: Number;
  peor: Number;
  fecha: String;
}

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent {
  Notas:NOTAS[]=notas;
}
