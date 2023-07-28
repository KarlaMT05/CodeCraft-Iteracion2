// Declaración de constantes
const formulario = document.getElementById("formulario");
const tipoUsuario = document.querySelector('[name=tipoUsuario]');
const nombre = document.querySelector("[name=nombre]");
const cedula = document.querySelector("[name=cedula]");
const fondoMarco = document.getElementById("fondo_marco");
const fotoPerfil = document.querySelector("input[type=file]");
const telefono = document.querySelector("[name=telefono]");
const contrasena = document.querySelector("[name=contrasena]");

//Funciones para validar que solo hayan letras, números o patrones a seguir
const validarSoloLetras = (valor) => {
    const letras = /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/;
    return letras.test(valor);
  };

const validarSoloNumeros = (valor) => {
    const numeros = /^[0-9-]+$/;
    return numeros.test(valor);
};

const validarContrasena = (valor) => {
    const caracteres = /^(?=.*[aeiou])(?=.*[bcdfghjklmnpqrstvwxyz])(?=.*[0-9])(?=.*[!@#$%^&*])\S{10,}$/i;
    return caracteres.test(valor);
};

//Función para validar que no hayan números

const revisarLetras = (campo) => {
  const valorCampo = campo.value;
  if(valorCampo.length > 0){
    if (validarSoloLetras(valorCampo)) {
      campo.nextElementSibling.classList.remove("error");
      campo.nextElementSibling.innerText = "";
      return true
  } else {
      campo.nextElementSibling.classList.add("error");
      campo.nextElementSibling.innerText = "*Solo puede ingresar letras*";
      return false
  }
  }
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

// Función para agregar imagen  
 
fotoPerfil.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const nuevaImagen = document.createElement("img");
      nuevaImagen.src = e.target.result;
      nuevaImagen.alt = "Foto de perfil";
      fondoMarco.innerHTML = "";
      fondoMarco.appendChild(nuevaImagen);
    };
    reader.readAsDataURL(file);
  }
});


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


// Función para eliminar mensaje

const eliminarMensaje = (campo) => {
  const valorCampo = campo.value;
  if (valorCampo.length > 0) {
      campo.nextElementSibling.classList.remove("error");
      campo.nextElementSibling.innerText = "";
  }
}; 


// Llamar a las funciones
nombre.addEventListener("blur", () => {revisarLetras(nombre);});
cedula.addEventListener("blur", () => {revisarNumeros(cedula);});
telefono.addEventListener("blur", () => {revisarNumeros(telefono);});
contrasena.addEventListener("blur", () => {revisarContrasena(contrasena);});
tipoUsuario.addEventListener("blur", () => {revisarEspacioDesabilitado(tipoUsuario);});



// Evento para evitar que el formulario se envíe si no cumple la condición
formulario.addEventListener("submit", (event) => {
  nombreRelleno = revisarEspacioVacio(nombre);
  cedulaRellena = revisarEspacioVacio(cedula);
  telefonoRelleno = revisarEspacioVacio(telefono);
  contrasenaRellena = revisarEspacioVacio(contrasena);
  tipoUsuarioRelleno = revisarEspacioDesabilitado(tipoUsuario);

  nombreValido = revisarLetras(nombre);
  cedulaValida = revisarNumeros(cedula);
  telefonoValido = revisarNumeros(telefono);
  contrasenaValida = revisarContrasena(contrasena);

  if (!nombreValido || !nombreRelleno || !cedulaValida || !cedulaRellena || !telefonoValido || !telefonoRelleno || !contrasenaValida || !contrasenaRellena || !tipoUsuarioRelleno) {
      event.preventDefault();
  }
}); 