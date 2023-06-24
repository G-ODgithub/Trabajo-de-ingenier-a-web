import { Component } from '@angular/core';

import noticias from './noticias.json';

interface NEWS {
  estado: String;
  asunto: String;
  detalles: String;
  fecha: String;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {
  Noticias:NEWS[]=noticias;
}
