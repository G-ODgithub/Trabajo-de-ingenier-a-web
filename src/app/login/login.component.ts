import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../messages.service';
import { ServiceClienteService } from 'src/services/service-cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  siteKey: string;
  errorLogin: boolean = false;
  constructor(public messagesService: MessagesService, private servicioCLiente: ServiceClienteService, private router: Router) {
    this.siteKey = '6LecE8gmAAAAAOJaQec1eEcEejSaqOL_4MuXCtkE';
  }

  aviso: string = "true";



  get email() {
    return this.formUser.get('email') as FormControl;
  }
  get contra() {
    return this.formUser.get('contra') as FormControl;
  }



  formUser = new FormGroup({

    'email': new FormControl('', [Validators.required, Validators.email]),
    'contra': new FormControl('', [Validators.required]),
    'captcha': new FormControl('', [Validators.required])
  });

  validacionLogin() {
    let email = this.email.value
    this.servicioCLiente.consultarEmailId(email).subscribe(
      (res: any) => {
        
        if (this.contra.value == res.contraseña) {
          this.errorLogin = false;
          this.addMessage()
        }else{
          window.alert("Contraseña incorrecta");
          this.errorLogin=true;
        }



      },
      (error: any) => {
        console.error("Correo no existente")
        this.errorLogin = true;
        return;

      }
    )
  }

  addMessage() {
    if (this.errorLogin) return;
    this.messagesService.add(this.aviso)
    this.router.navigateByUrl('/clases');
  }

}
