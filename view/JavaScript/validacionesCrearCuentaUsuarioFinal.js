// Declaración de constantes
const formulario = document.getElementById("formulario");
const nombre = document.querySelector("[name=nombre]");
const cedula = document.querySelector("[name=cedula]");
const telefono = document.querySelector("[name=telefono]");
const genero = document.querySelector('[name=genero]');
const fondoMarco = document.getElementById("fondo_marco");
const fotoPerfil = document.querySelector("input[type=file]");
const correo = document.querySelector("[name=correo]");
const contrasena = document.querySelector("[name=contrasena]");
const estudios = document.querySelector("[name=datos_estudios]");
const experiencia = document.querySelector("[name=datos_experiencia]");
const curriculum = document.querySelector("[name=curriculum]");


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

const validarCorreo = (valor) => {
    const caracteres = /^[a-zA-Z0-9._%+-@]+@[a-zA-Z0-9.-@]+\.[a-zA-Z]{2,}$/i;
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
      console.log("Se quito el mensaje")
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
genero.addEventListener("blur", () => {revisarEspacioDesabilitado(genero);});
correo.addEventListener("blur", () => {revisarCorreo(correo);});
contrasena.addEventListener("blur", () => {revisarContrasena(contrasena);});
estudios.addEventListener("blur", () => {eliminarMensaje(estudios);});
experiencia.addEventListener("blur", () => {eliminarMensaje(experiencia);});
curriculum.addEventListener("blur", () => {eliminarMensaje(curriculum);});
fotoPerfil.addEventListener("blur", () => {eliminarMensaje(fotoPerfil);});



// Evento para evitar que el formulario se envíe si no cumple la condición
formulario.addEventListener("submit", (event) => {
  nombreRelleno = revisarEspacioVacio(nombre);
  cedulaRellena = revisarEspacioVacio(cedula);
  telefonoRelleno = revisarEspacioVacio(telefono);
  generoRelleno = revisarEspacioDesabilitado(genero);
  correoRelleno = revisarEspacioVacio(correo);
  contrasenaRellena = revisarEspacioVacio(contrasena);
  estudiosRelleno = revisarEspacioVacio(estudios);
  experienciaRellena = revisarEspacioVacio(experiencia);
  curriculumRelleno = revisarEspacioVacio(curriculum);
  fotoRellena = revisarEspacioVacio(fotoPerfil);

  nombreValido = revisarLetras(nombre);
  cedulaValida = revisarNumeros(cedula);
  telefonoValido = revisarNumeros(telefono);
  correoValido = revisarCorreo(correo);
  contrasenaValida = revisarContrasena(contrasena);


  if (!nombreValido || !nombreRelleno || !cedulaValida || !cedulaRellena ||  !telefonoValido || !telefonoRelleno || !generoRelleno || !correoValido || !correoRelleno || !contrasenaValida || !contrasenaRellena || !estudiosRelleno || !experienciaRellena || !curriculumRelleno || !fotoRellena) {
      event.preventDefault();
  }
});