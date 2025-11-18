const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Servir arquivos estáticos (HTML, CSS, JS do frontend)
app.use(express.static(path.join(__dirname, 'public'))); 

const PORT = process.env.PORT || 3000;

// Lógica do Socket.IO (Chat)
io.on('connection', socket => {
    console.log('Novo usuário conectado ao chat.');

    // 1. Recebe a mensagem do cliente
    socket.on('chatMessage', (msg) => {
        // 2. Envia a mensagem para todos os clientes conectados na mesma "sala"
        // Você precisará implementar a lógica de salas aqui. Por simplicidade, enviamos para todos.
        io.emit('message', msg); 
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado.');
    });
});

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));