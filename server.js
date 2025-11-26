const express = require("express");
const path = require("path");

const app = express();

// Permite enviar/receber JSON
app.use(express.json());

// Servir arquivos da pasta do projeto
app.use(express.static(__dirname));

// Rota principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "main page.html"));
});

// Exemplo de rota do chat
app.post("/chat", (req, res) => {
    const mensagem = req.body.mensagem;

    console.log("Mensagem recebida no backend:", mensagem);

    res.json({
        resposta: "Seu servidor está funcionando! Você enviou: " + mensagem
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
