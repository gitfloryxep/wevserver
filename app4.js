// se requiere el paquete Ecpress
// Se instala en paquete Express



const express = require('express')
const app = express()

app.get('/',function(req, res){
    //se muestra en el puerto 4000 hola mundo
    res.send('hola mundo')
})

app.listen(4000)