// Desntro de la consola re muestra lo que se encuntra en la ruta



const express = require('express')
const app = express()
const port = 8000

app.get('/',function(req, res){
    res.send('Home Page')
})

app.get('/hola-mundo', function(req, res){
    res.send('hola mundo en su respectiva ruta')
})

app.get('*', function(req, res){
    res.send('404| Page not found')
})

app.listen(port, ()=>{
    console.log(`Example app listening al http://localhost:${port}`);
})
