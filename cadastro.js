const form = document.getElementById("formCadastro");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const especie = document.getElementById("especie").value;
    const idade = document.getElementById("idade").value;
    const foto = document.getElementById("foto").value;
    const msg = document.getElementById("mensagem");

    if (!nome || !especie || !idade || !foto) {
      msg.style.color = "red";
      msg.textContent = "Por favor, preencha todos os campos!";
      return;
    }

    msg.style.color = "green";
    msg.textContent = `Pet "${nome}" cadastrado com sucesso! 🐾`;

    form.reset();
  });
}
