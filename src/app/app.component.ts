import { Component,Input } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public messagesService: MessagesService){

  }

  title = 'ep3';  
  
  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;

  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }

}
