// Declaración de constantes
const formulario = document.getElementById("formulario");
const correo = document.querySelector("[name=correo]");
const contrasena = document.querySelector("[name=contrasena]");


//Funciones para validar que solo hayan letras, números o patrones a seguir

const validarCorreo = (valor) => {
    const caracteres = /^[a-zA-Z0-9._%+-@]+@[a-zA-Z0-9.-@]+\.[a-zA-Z]{2,}$/i;
    return caracteres.test(valor);
};

const validarContrasena = (valor) => {
    const caracteres = /^(?=.*[aeiou])(?=.*[bcdfghjklmnpqrstvwxyz])(?=.*[0-9])(?=.*[!@#$%^&*])\S{10,}$/i;
    return caracteres.test(valor);
};


//Función para validar el correo
const revisarCorreo = (campo) => {
    const valorCampo = campo.value;
    if(valorCampo.length > 0){
      if (validarCorreo(valorCampo)) {
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
        return true
    } else {
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "*El correo debe contener al menos un @ y un .*";
        return false
    }
    }
  }; 

//Función para validar la contraseña
const revisarContrasena = (campo) => {
    const valorCampo = campo.value;
    if(valorCampo.length > 0){
      if (validarContrasena(valorCampo)) {
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";  
        return true
    } else {
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "*La contraseña debe tener mínimo 10 caracteres, 1 vocal, 1 consonante, 1 número y 1 carácter especial *";
        return false
    }
    }
  };


// Función para validar si el espacio está vacío
const revisarEspacioVacio = (campo) => {
    const valorCampo = campo.value;
    if (valorCampo.length === 0) {
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "*Este campo es obligatorio*";
        return false
    } else {
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
        return true
    }
  }; 


// Llamar a las funciones
correo.addEventListener("blur", () => {revisarCorreo(correo);});
contrasena.addEventListener("blur", () => {revisarContrasena(contrasena);});


// Evento para evitar que el formulario se envíe si no cumple la condición
formulario.addEventListener("submit", (event) => {
    correoRelleno = revisarEspacioVacio(correo);
    contrasenaRellena = revisarEspacioVacio(contrasena);
  
    correoValido = revisarCorreo(correo);
    contrasenaValida = revisarContrasena(contrasena);
  
  
  
    if (!correoValido || !correoRelleno || !contrasenaValida || !contrasenaRellena) {  
      event.preventDefault();
    }
  });