import { Component,Input } from '@angular/core';
import { MessagesService } from './messages.service';
import {ServiceClienteService} from '../services/service-cliente.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public messagesService: MessagesService,private servicioCLiente:ServiceClienteService){

  }
  
  /* ngOnInit():void{
    this.getUsuarios()
  } */
  
  

   
  
  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }

}
