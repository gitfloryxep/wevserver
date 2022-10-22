const http = require('http')

//Se envia un archivo CSV, esto es solo una ruta.
http.createServer((req, res)=>{
//Crea un archivo para el listado de los datos.
    res.setHeader('Content-Disposition','attachment; filename-lista.cvs')
    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id, nombre\n')
    res.write('1, Florinda\n')
    res.write('2, Steve\n')
    res.write('3, Bill\n')
    res.write('4, Dennis\n')
    res.end();
})
.listen(3000)
// Se muestra en consola si el puerto se esta ejecutando
console.log('Escuchando el puerto', 3000);