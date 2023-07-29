var express = require("express");
var path = require("path");
var bodyParser = require( "body-parser" );
var multer = require( "multer" );

var app = express( );
app.use(multer({}).any());


var directorioEstaticos = path.join( __dirname, "view"); 
app.use(express.static( directorioEstaticos ));
console.log("Directorio archivos estáticos: " + directorioEstaticos);

var puertoServidor=3000;
var servidor=app.listen(puertoServidor , function( ){ 
	console.log("Corriendo en http://localhost:"+puertoServidor);  
});
