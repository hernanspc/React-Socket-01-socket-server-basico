//Servidor de Express
const express = require('express');
const app = express();

//Servidor de sockerts
const server = require('http').createServer(app);

//COnfiguracion de socket server
const io = require('socket.io')(server);

//desplegar directorio publico
app.use(express.static(__dirname + '/public'));

io.on('connection', ( socket ) => { 
    // console.log('cliente conectado! ', socket.id);
    socket.emit("mensaje-bienvenida", {
        msg: 'Bienvenida al server',
        fecha: new Date()
    })
});

server.listen(8080, () => {
    console.log('Server corriendo en puerto: 8080')
});