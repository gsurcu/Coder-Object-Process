const express = require('express')
const { listarProductosPorIdController, guardarProductoController, actualizarProductoController, eliminarProductoController } = require('../../controllers/productos.controllers')

const router = express.Router();

router.get('/:id?', listarProductosPorIdController);

router.post('/', guardarProductoController);

router.put('/:id', actualizarProductoController);

router.delete('/:id', eliminarProductoController);

module.exports = router;