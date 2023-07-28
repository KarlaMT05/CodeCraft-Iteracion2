// Declaración de constantes
const formulario = document.getElementById("formulario");
const nombre_posicion = document.querySelector("[name=posicion]");
const cant_vacantes = document.querySelector("[name=vacantes]");
const salario = document.querySelector("[name=rango_salarial]");
const edad = document.querySelector("[name=edad]");
const genero = document.querySelector("[name=genero]");
const experiencia = document.querySelector("[name=experiencia]");
const estudios = document.querySelector("[name=nivel_educativo]");
const idiomas = document.querySelector("[name=idiomas]");
const atribuciones = document.querySelector("[name=atribuciones_deseables]");


//Funciones para validar que solo hayan letras, números o patrones a seguir
const validarSoloLetras = (valor) => {
    const letras = /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/;
    return letras.test(valor);
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

nombre_posicion.addEventListener("blur", () => {revisarLetras(nombre_posicion);});
cant_vacantes.addEventListener("blur", () => {eliminarMensaje(cant_vacantes);});
salario.addEventListener("blur", () => {eliminarMensaje(salario);});
edad.addEventListener("blur", () => {eliminarMensaje(edad);});
genero.addEventListener("blur", () => {eliminarMensaje(genero);});
experiencia.addEventListener("blur", () => {eliminarMensaje(experiencia);});
estudios.addEventListener("blur", () => {eliminarMensaje(estudios);});
idiomas.addEventListener("blur", () => {eliminarMensaje(idiomas);});
atribuciones.addEventListener("blur", () => {eliminarMensaje(atribuciones);});




// Evento para evitar que el formulario se envíe si no cumple la condición
formulario.addEventListener("submit", (event) => {
    posicionValido = revisarEspacioVacio(nombre_posicion);
    vacantesValido = revisarEspacioVacio(cant_vacantes);
    salarioValido = revisarEspacioDesabilitado(salario);
    edadValido = revisarEspacioDesabilitado(edad);
    generoValido = revisarEspacioDesabilitado(genero);
    experienciaValido = revisarEspacioDesabilitado(experiencia);
    estudiosValido = revisarEspacioDesabilitado(estudios);
    idiomasValido = revisarEspacioDesabilitado(idiomas);
    atribucionesValido = revisarEspacioVacio(atribuciones);

    soloLetras = revisarLetras(nombre_posicion);

    if (!soloLetras || !posicionValido || !vacantesValido || !salarioValido || !edadValido || !generoValido || !experienciaValido || !estudiosValido || !idiomasValido || !atribucionesValido) {
        event.preventDefault();
    }
});