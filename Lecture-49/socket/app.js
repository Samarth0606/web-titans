const express = require('express');
const http = require('http');
const  path  = require('path');
const app = express();
const httpServer = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(httpServer);


io.on('connection', (socket) => {
    console.log('A user connected');
});

app.use('/' , express.static(path.join(__dirname , 'public')))

httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});