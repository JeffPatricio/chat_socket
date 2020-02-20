const io = require('socket.io')(require('./server'))

const messages = []

io.on('connection', socket => {
  console.log('socket conectado: ', socket.id)
  socket.emit('previousMessages', messages)
  socket.on('sendMessage', data => {
    messages.push(data)
    socket.broadcast.emit('receivedMessage', data)
  })
})