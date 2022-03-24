const express = require('express');
const path = require('path')
const authRoutes = require('./auth/auth.routes');
const { fork } = require('child_process')
const router = express.Router();
//Routes
router.use('/auth', authRoutes);

router.get('/randoms', (req, res) => {
  const { cant } = req.query
  console.log(cant)
  const random = fork(path.resolve(__dirname, './random/random.routes.js'))

  random.send('start');
  random.on('message', dato => {
    res.send(`El resultado es => ${dato}`);
  })
  random.send({cant: cant})
})

module.exports = router;