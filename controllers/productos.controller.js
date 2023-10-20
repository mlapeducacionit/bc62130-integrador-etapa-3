import models from '../models/productos.model.js'

const obtenerProductos = async (req, res) => {
    let id = req.params.id

    if ( id ) {

    } else {
        const productos = await models.leerProductos()
        return res.status(200).json(productos)
    }
}

const guardarProducto = (req, res) => {
    res.send('POST (CREATE)')
}

const actualizarProducto = (req, res) => {
    res.send('PUT (UPDATE)')
}

const borrarProducto = (req, res) => {
    res.send('DELETE (DELETE)')
}

export default {
    obtenerProductos, 
    guardarProducto, 
    actualizarProducto, 
    borrarProducto
}