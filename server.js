import express from 'express'
import routerProductos from './routers/productos.router.js'

// !Configuraciones

const app = express()
const PORT = 8080

// ! Middlewares

// ! Rutas
app.use('/api/productos', routerProductos)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})