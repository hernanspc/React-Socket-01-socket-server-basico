//Servidor de Express
const express = require('express');
const app = express();

//Servidor de sockerts
const server = require('http').createServer(app);

//COnfiguracion de socket server
const io = require('socket.io')(server);

//desplegar directorio publico
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {

    //Escuchar everto
    socket.on('mensaje-to-server', (data) => {
        console.log('data : ', data)

        io.emit('mensaje-from-server', data)
    });

});

server.listen(8080, () => {
    console.log('Server corriendo en puerto: 8080')
});