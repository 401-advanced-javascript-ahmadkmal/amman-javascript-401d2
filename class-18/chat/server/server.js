const io = require('socket.io')(3000);

require('./apps/slick.js')(io);

io.on('connection', (socket) => {
  console.log(`Welcome to the Global Connection ${socket.id}`);
  socket.on('error', (payload) => {
    io.emit('error', payload);
  });
  socket.on('action', (payload) => {
    io.emit('action', payload);
  });
});
