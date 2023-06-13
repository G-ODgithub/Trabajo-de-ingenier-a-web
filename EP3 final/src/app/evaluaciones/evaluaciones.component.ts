import { Component } from '@angular/core';

import evaluaciones from './evaluaciones.json';

interface PRUEBAS {
  estado: String;
  asignatura: String;
  evaluacion: String;
  temario: String;
  fecha: String;
}

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.scss']
})
export class EvaluacionesComponent {
  Evaluaciones:PRUEBAS[]=evaluaciones;
}
