import { Component } from '@angular/core';

import reuniones from './reuniones.json';

interface REUNIONES {
  estado: String;
  asunto: String;
  detalles: String;
  fecha: String;
}

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.scss']
})
export class ReunionesComponent {
  Reuniones:REUNIONES[]=reuniones;
}
