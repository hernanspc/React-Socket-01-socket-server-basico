//Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const Sockets = require('./sockets');

class Server {

    constructor() {

        this.app = express();
        this.port = 8080;

        // Http server
        this.server = http.createServer(this.app);
        // Configuraciones de sockets
        this.io = socketio(this.server, {/* */ });
    }

    middlewares() {
        //Desplegar directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {

        //Inicializar
        this.middlewares();
        this.configurarSockets();

        //inicializar server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto: ', this.port)
        });
    }

}


module.exports = Server;