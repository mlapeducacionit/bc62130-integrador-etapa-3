import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import routerProductos from './routers/productos.router.js'
import mongoose from 'mongoose'

// !Configuraciones

const app = express()
const PORT = process.env.PORT || 3000
const corsConfig = {
    origin: 'http://localhost:2222' // http://127.0.0.1:2222
}

// ! CONEXIÓN MONGODB

const conectar = async () => {
    try {
        await mongoose.connect(process.env.URI_MLOCAL)
        console.log('Conexión a Mongo realizada con éxito!')
    } catch (error) {
        console.log('Error al conectar a Mongo DB', error)
    }
}
conectar()

// ! Middlewares
app.use(express.urlencoded({extended: true})) // Decodificar el body enviado desde un formulario
app.use(express.json()) // Decodificar el body enviado desde un json
app.use(cors(corsConfig))

// ! Rutas
app.use('/api/productos', routerProductos)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.all('*', (req, res) => {
    res.status(404).send(`La ruta ${req.url} utilizando el ${req.method} no está disponible!`)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})