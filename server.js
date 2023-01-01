const express = require("express")

const app = express()

const obj = {title: 'Jam', creator: 'Chris Morris', year: '2000'}

let counter = 0;

const ahora = new Date().toLocaleString()

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>')
})

app.get('/visitas', (req, res) => {
    // res.send(`Hola desde el back usando express esta vez`)
    counter++
    res.send(`Numero de visitas: ${counter}`)
})

app.get('/fyh', (req, res) => {
    res.send(ahora)
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor expressescuchando en pierto ${server.address().port}`);
})

// Escuchamos un evento en caso de error
server.on('error', error =>
    console.log(`Error en servidor ${error}`
    ))