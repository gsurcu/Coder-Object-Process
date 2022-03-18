const express = require('express')
const http = require('http')
const router = require('./routers/app.routers')
const { ChatDaoMongoDb } = require('./models/index')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const chat = new ChatDaoMongoDb("chat")
const PORT = process.env.PORT || 8080;

app.use(router);

io.on('connection', async (socket) => {
  emitir()
  socket.on("incomingMessage", async (message) =>{
    await chat.guardar(message)
    emitir()
  })
})

const emitir = async () => {
  const lista = await chat.normalizar()
  console.log(lista)
  io.sockets.emit("chat", lista)
}

server.listen(PORT, () => { console.log(`Running on port: ${PORT}`)})
