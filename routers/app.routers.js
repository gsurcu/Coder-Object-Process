const path = require('path');
const express = require('express');
const apiRoutes = require('./api/api.routes');
const auth = require('../middlewares/auth');
const infoRoute = require('./info/info.routes')

const router = express.Router();


//Routes
router.use('/api', apiRoutes);

router.get('/info', infoRoute)

router.get('/', (req, res) => {
  const user = req.user;
  if (user) {
    return res.redirect('/profile');
  }
  else {
    return res.sendFile(path.resolve(__dirname, '../public/login.html'));
  }
});

router.get('/profile', auth, async (req, res) => {
  const user = req.user;
  res.render('profile', { sessionUser: user });
});

router.get('/logout', auth, (req, res, next) => {
  req.logOut();
  console.log('User logued out');
  res.redirect('/');
});

module.exports = router;