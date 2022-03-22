const express = require('express');
const authControllers = require('../../../controllers/auth.controllers');
const passport = require('../../../middlewares/passport');

const router = express.Router();

router.post(
  '/register',
  passport.authenticate('signup', { failureRedirect: '/signup-error' }), 
  authControllers.register
);

router.post(
  '/login',
  passport.authenticate('signin', { failureRedirect: '/signin-error' }),
  authControllers.login
);

router.get(
  '/twitter',
  passport.authenticate('twitter')
);

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', { successRedirect: '/profile', failureRedirect: '/twitter-error' })
);

module.exports = router;