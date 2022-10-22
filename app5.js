// Se requiere el paquete Express

const express = require('express')
const app = express()

app.get('/',function(req, res){
    res.send('Home Page')
})
//Dentro de la ruta indicada se agrega "/ hola-mundo"
//Para que se logra ejecutar el codigo y muetra la frase en pantalla
app.get('/hola-mundo', function(req, res){
    res.send('hola mundo en su respectiva ruta')
})
app.listen(5000);