const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "main page.html"));
});


app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

