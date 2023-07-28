var crearCuenta = document.getElementById("cuadro_crear_cuenta");
var sublista = document.getElementById("sublista_crear_cuenta");

crearCuenta.addEventListener("mouseover", function(){
    sublista.style.display = "block";
});

crearCuenta.addEventListener("mouseout", function(){
    sublista.style.display = "none";
});