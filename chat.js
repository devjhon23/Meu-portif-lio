const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");


// Enviar mensagem para o Firebase
sendBtn.addEventListener("click", () => {
  const texto = chatInput.value.trim();

  if (texto === "") return;

  db.collection("mensagens").add({
    texto: texto,
    horario: new Date()
  });

  chatInput.value = ""; // limpa o input
});


// Carregar mensagens em tempo real
db.collection("mensagens")
  .orderBy("horario")
  .onSnapshot((snapshot) => {
    chatBox.innerHTML = ""; // limpa antes de exibir de novo

    snapshot.forEach(doc => {
      const msg = doc.data();
      const p = document.createElement("p");
      p.textContent = msg.texto;
      p.classList.add("mensagem");

      chatBox.appendChild(p);
    });

    // scroll automático
    chatBox.scrollTop = chatBox.scrollHeight;
  });
