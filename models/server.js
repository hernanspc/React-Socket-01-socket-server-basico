//Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socketio');
const path = require('path');

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
        this.app.use(express.static(path.resolve(__dirname + '../public')));

    }

    execute() {

        //Inicializar
        this.middlewares();

        //inicializar server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto: ', this.port)
        });
    }

}


module.exports = Server;