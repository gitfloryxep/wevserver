// despues de la instalacion del paquete http
// se crea una el archvo app.js para hacer el uso
// del paquete http

const http = require('http')

//se crea }webServer
http.createServer((req, res)=>{
// dentro  der puerto se muestra la frace hola mundo
    res.write('Hola Mundo');
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);