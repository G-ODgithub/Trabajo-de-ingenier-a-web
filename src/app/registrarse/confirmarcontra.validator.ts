import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const matchpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let password = control.get('pass');
     let confirmpassword = control.get('cpass');
     if(password && confirmpassword && password?.value != confirmpassword?.value){
        return {
            passwordmatcherror : true }
     }
    return null; 
   }