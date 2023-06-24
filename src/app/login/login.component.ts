import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  siteKey: string;

  constructor(public messagesService: MessagesService){
      this.siteKey ='6LecE8gmAAAAAOJaQec1eEcEejSaqOL_4MuXCtkE';
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
    'contra' : new FormControl('',[Validators.required]),
    'captcha': new FormControl('',[Validators.required])
  });


  
  

}
