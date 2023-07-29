var express = require( "express" );
var path = require( "path" );
var app = express();

var directorioEstaticos = path.join( __dirname, "view"); 
app.use(express.static( directorioEstaticos ));
console.log("Directorio archivos estáticos: " + directorioEstaticos);

var puertoServidor = 3000;
var servidor = app.listen( puertoServidor , function(){ 
console.log("Corriendo en http://localhost:"+puertoServidor+""); 
});


