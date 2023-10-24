import express from 'express'
const routerProductos = express.Router()

import controller from '../controllers/productos.controller.js'

/* ------------------------------------------------ */
/* CRUD -> CREATE | READ | UPDATE | DELETE          */
/* ------------------------------------------------ */

// ! GET ALL / ONE (READ) - request de todos los productos
// http://localhost:8080/api/productos/ | GET

routerProductos.get('/:id?', controller.obtenerProductos)  // :id? params no obligatorio
// ! POST (CREATE) - request para agregar un producto
// http://localhost:8080/api/productos/ | POST

routerProductos.post('/', controller.guardarProducto)
// ! PUT (UPDATE) - request para actualizar un producto
// http://localhost:8080/api/productos/id | PUT

routerProductos.put('/:id', controller.actualizarProducto)
// ! DELETE (DELETE) - request para eliminar un producto
// http://localhost:8080/api/productos/id | DELETE

routerProductos.delete('/:id', controller.borrarProducto)

export default routerProductos

