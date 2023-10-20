
const obtenerProductos = (req, res) => {
    res.send('GET ALL / ONE (READ)')
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