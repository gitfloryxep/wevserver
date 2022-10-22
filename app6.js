// Se requiere Express

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Home Page')
})

app.get('/hola-mundo', function(req, res) {
    res.send('hola mundo en su respectiva ruta')
})
// dentro del puerto se muestra todo lo que se encuentra
// dentro de localhost:6000/holamundo.
// nos indica que esa ruta esta como 404. 
app.get('*', function (req, res) {
    res.send('404 | Page not found')
})

app.listen(1100);