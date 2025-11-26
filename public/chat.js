const express = require("express");
const app = express();
const path = require("path");

// permite o servidor ler arquivos da pasta do projeto
app.use(express.static(__dirname));

// rota principal (abre o main page)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "main page.html"));
});

// inicia servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

