const Server = require('./models/server')

const server = new Server();

server.execute();

// io.on('connection', (socket) => {

//     //Escuchar everto
//     socket.on('mensaje-to-server', (data) => {
//         console.log('data : ', data)
//         io.emit('mensaje-from-server', data)
//     });

// });

