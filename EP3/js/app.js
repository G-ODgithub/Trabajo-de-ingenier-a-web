$("#validacion").validate({    

    rules:{
      nombre:{
        maxlength: 30,
      },
      apellidos:{
        maxlength: 30,
      },
      correo: {
        email: true,
      },
    },
  
    messages: {
      nombre:{
        required: "Por favor indique su nombre",
        maxlength: "Nombre tiene 30 caracteres como máximo"
      },
      apellidos:{
        required: "Por favor indique sus apellidos",
        maxlength: "Apellidos tienen 30 caracteres como máximo"
      }, 
      correo: {
        required: "Por favor indique su correo electrónico",
        email: "Por favor indique un correo válido"
      },
      contrasenia: {
        required: "Por favor inserte su contraseña",
      },
      confirmar: {
        required: "Por favor confirme su contraseña",
      },
    },
  
    submitHandler: function(form) {
      form.submit();
    }
   });

$("#registro").validate({    

    rules:{
      username:{
        maxlength: 30,
      },
    },
  
    messages: {
      username:{
        required: "Por favor indique su nombre de usuario",
        maxlength: "Nombre de usuario tiene 30 caracteres como máximo"
      },
      contrasenia: {
        required: "Por favor inserte su contraseña",
      },
    },
  
    submitHandler: function(form) {
      form.submit();
    }
   });   
   