const express = require('express')
const rutasProductos = require('./productos/productos.routes')
const rutasLogin = require('./login/login.routes')

const router = express.Router();


// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Rutas
router.use('/', rutasLogin)
router.use('/api/productos', rutasProductos);
router.use('/api/*', (req, res) => {
  res.status(404).json({
    error: -2,
    descripcion: `La ruta ${req.baseUrl} con el metodo ${req.method} no esta implementado`,
  });
});

module.exports = router;