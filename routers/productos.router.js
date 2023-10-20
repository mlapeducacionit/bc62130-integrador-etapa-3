import express from 'express'
const routerProductos = express.Router()

/* ------------------------------------------------ */
/* CRUD -> CREATE | READ | UPDATE | DELETE          */
/* ------------------------------------------------ */
// ! GET ALL / ONE (READ) - request de todos los productos
// http://localhost:8080/api/productos/ | GET
routerProductos.get('/:id?', (req, res) => { // :id? params no obligatorio
    res.send('GET ALL / ONE (READ)')
})
// ! POST (CREATE) - request para agregar un producto
// http://localhost:8080/api/productos/ | POST
routerProductos.post('/', (req, res) => {
    res.send('POST (CREATE)')
})
// ! PUT (UPDATE) - request para actualizar un producto
// http://localhost:8080/api/productos/id | PUT
routerProductos.put('/:id', (req, res) => {
    res.send('PUT (UPDATE)')
})
// ! DELETE (DELETE) - request para eliminar un producto
// http://localhost:8080/api/productos/id | DELETE
routerProductos.delete('/:id', (req, res) => {
    res.send('DELETE (DELETE)')
})

export default routerProductos

