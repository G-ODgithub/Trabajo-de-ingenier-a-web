import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, Form,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {
  constructor(private fb:FormBuilder){

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


  })

  limpiar(){
    this.formUser.reset();
  }

}
