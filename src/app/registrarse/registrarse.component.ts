import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {

  siteKey: string;

  constructor(private fb:FormBuilder){
    this.siteKey ='6LecE8gmAAAAAOJaQec1eEcEejSaqOL_4MuXCtkE';
  }

/*   get email(){
    return this.formUser.get('email') as FormControl;
  }
  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }

  formUser = new FormGroup({
    'nombre': new FormControl('',Validators.required),
    'apellido':new FormControl('',Validators.required),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'contra' : new FormControl('',[Validators.required])
  }); */

  get email(){
    return this.formUser.get('email') as FormControl;
  }
  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  } 
  get apellido(){
    return this.formUser.get('apellido') as FormControl;
  }get pass(){
    return this.formUser.get('pass') as FormControl;
  }get cpass(){
    return this.formUser.get('cpass') as FormControl;
  }
  formUser = this.fb.group({
    'nombre': ['',Validators.required],
    'apellido':['',Validators.required],
    'email':['',[Validators.required,Validators.email]],
    'pass':['',[Validators.required,Validators.maxLength(16),Validators.minLength(6)]],
    'cpass':['',[Validators.required,Validators.maxLength(16),Validators.minLength(6)]],
    'captcha': new FormControl('',[Validators.required])

  })

  limpiar(){
    this.formUser.reset();
  }

}