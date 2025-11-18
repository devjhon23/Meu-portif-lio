// Conecta ao servidor Socket.IO (que está rodando em Node.js)
const socket = io();

// Obtém o nome do pet da URL (parâmetro passado ao clicar no card)
const urlParams = new URLSearchParams(window.location.search);
const petNome = urlParams.get('pet') || 'Pet Desconhecido';

document.getElementById('titulo-chat').textContent = `Chat com ${petNome}`;

const form = document.getElementById('form-chat');
const input = document.getElementById('input-msg');
const mensagensDiv = document.getElementById('mensagens');

// 1. Evento de Envio de Formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        // Envia a mensagem para o servidor Node.js
        socket.emit('chatMessage', `Você: ${input.value}`); 
        input.value = '';
    }
});

// 2. Evento de Recebimento de Mensagem
socket.on('message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    mensagensDiv.appendChild(item);
    // Rola para o final
    mensagensDiv.scrollTop = mensagensDiv.scrollHeight; 
});