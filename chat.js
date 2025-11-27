const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");



sendBtn.addEventListener("click", () => {
  const texto = chatInput.value.trim();

  if (texto === "") return;

  db.collection("mensagens").add({
    texto: texto,
    horario: new Date()
  });

  chatInput.value = ""; 
});



db.collection("mensagens")
  .orderBy("horario")
  .onSnapshot((snapshot) => {
    chatBox.innerHTML = ""; 

    snapshot.forEach(doc => {
      const msg = doc.data();
      const p = document.createElement("p");
      p.textContent = msg.texto;
      p.classList.add("mensagem");

      chatBox.appendChild(p);
    });

 
    chatBox.scrollTop = chatBox.scrollHeight;
  });
