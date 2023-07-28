// Declaración de constantes
const formulario = document.getElementById("formulario");
const correo = document.querySelector("[name=correo]");
const tipoUsuario = document.querySelector('[name=tipoUsuario]');

//Funciones para validar que solo hayan letras, números o patrones a seguir

const validarCorreo = (valor) => {
    const caracteres = /^[a-zA-Z0-9._%+-@]+@[a-zA-Z0-9.-@]+\.[a-zA-Z]{2,}$/i;
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


// Función para validar si el espacio tiene seleccionado una opción desabilitada
const revisarEspacioDesabilitado = (campo) => {
  const valorCampo = campo.options[campo.selectedIndex];

  if (valorCampo.disabled) {
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
tipoUsuario.addEventListener("blur", () => {revisarEspacioDesabilitado(tipoUsuario);});

// Evento para evitar que el formulario se envíe si no cumple la condición
formulario.addEventListener("submit", (event) => {
  correoRelleno = revisarEspacioVacio(correo);
  tipoUsuarioRelleno = revisarEspacioDesabilitado(tipoUsuario);

  correoValido = revisarCorreo(correo);

  if (!correoValido || !correoRelleno || !tipoUsuarioRelleno) {
      event.preventDefault();
  }
}); 