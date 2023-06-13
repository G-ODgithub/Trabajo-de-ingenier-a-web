import { Component, EventEmitter, Output,Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public messagesService: MessagesService){

  }

  aviso:string="true";
  
  addMessage(){
    this.messagesService.add(this.aviso)
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  

  formUser = new FormGroup({

    'email': new FormControl('',[Validators.required,Validators.email]),
    'contra' : new FormControl('',[Validators.required])
  });


  
  

}
