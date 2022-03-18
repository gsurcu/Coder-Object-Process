const fs = require('fs/promises');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path')
const { ProductosDaoMongoDb } = require('../../models/index')

const productos = new ProductosDaoMongoDb("productos")
const config = require('../../config/config')
const auth = require('../../middlewares/auth');

const users = [...require('../../data/users.json')];

const app = express();
app.use(express.static('public'));
app.use(session({
  name: 'my-session',
  secret: 'top-secret-51',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: config.mongodb
  }),
  cookie: {
    maxAge: 600000
  }
}));

// Template engines
app.set('views', './views');
app.set('view engine', 'ejs');

// Routes
app.get('/', async (req, res) => {
  const user = await req.session.user;
  if (user) {
    return res.redirect('/login');
  }
  res.render('login', { sessionUser: false });
});

app.get('/login', auth, async (req, res) => {
  const user = await req.session.user;
  if (user) {
    res.render('login', { 
      sessionUser: user,
      productos: await productos.listarAll()
    });
  }
})

app.get('/logout', auth, async (req, res) => {
  try {
    const name = await req.session.user.name;
    console.log('logout')
    await fs.writeFile(path.join(__dirname,'../../data/users.json'), JSON.stringify(users));
    req.session.destroy(err => {
      if (err) {
        console.log(err);
        res.clearCookie('my-session');
      }
      else {
        res.clearCookie('my-session');
        res.render('logout',{name: name})
      }
    })
  }
  catch(err) {
    console.log(err);
  }
});

app.get('/unauthorized', (req, res) => {
  res.status(401).sendFile(path.join(__dirname,'../../public/unauthorized.html'));
});

app.get('/notenoughfunds', auth, (req, res) => {
  res.status(400).sendFile(path.join(__dirname,'../../public/notenough.html'));
});

app.get('/error', (req, res) => {
  res.status(500).sendFile(path.join(__dirname,'../../public/error.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);
  if (!user) return res.redirect('/error');
  req.session.user = user;
  res.redirect('/login');
});

module.exports = app;