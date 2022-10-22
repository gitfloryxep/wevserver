const http = require('http')


http.createServer((req, res)=>{
// Se requiere todo lo que el usuario se requiere
//RESPONSE -  todo lo que el usuario responde
    res.writeHead(200, {'Content-Type': 'application/json'})
//Se muestra en el puerto indecaco el id y el nombre
    const persona = {
        id: 1,
        nombre: 'Florinda'
        }

    res.write(JSON.stringify(persona));
    res.end();
})
.listen(7000)

console.log('Escuchando el puerto', 7000);