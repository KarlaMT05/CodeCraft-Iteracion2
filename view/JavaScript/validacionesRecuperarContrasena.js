// Declaración de constantes
const formulario = document.getElementById("formulario");
const cedula = document.querySelector("[name=cedula]");
const correo = document.querySelector("[name=correo]");


//Funciones para validar que solo hayan letras, números o patrones a seguir

const validarSoloNumeros = (valor) => {
    const numeros = /^[0-9-]+$/;
    return numeros.test(valor);
};

const validarCorreo = (valor) => {
    const caracteres = /^[a-zA-Z0-9._%+-@]+@[a-zA-Z0-9.-@]+\.[a-zA-Z]{2,}$/i;
    return caracteres.test(valor);
};


//Función para validar que no hayan letras 

const revisarNumeros = (campo) => {
    const valorCampo = campo.value;
    if(valorCampo.length > 0){
      if (validarSoloNumeros(valorCampo)) {
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";  
        return true
    } else {
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "*Solo puede ingresar números y guiones*";
        return false
    }
    }
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
cedula.addEventListener("blur", () => {revisarNumeros(cedula);});
correo.addEventListener("blur", () => {revisarCorreo(correo);});


// Evento para evitar que el formulario se envíe si no cumple la condición
formulario.addEventListener("submit", (event) => {
    correoRelleno = revisarEspacioVacio(correo);
    cedulaRellena = revisarEspacioVacio(cedula);
    correoValido = revisarCorreo(correo);
    cedulaValida = revisarNumeros(cedula);
  
    if (!correoValido || !correoRelleno || !cedulaValida || !cedulaRellena) {  
      event.preventDefault();
    }
  });