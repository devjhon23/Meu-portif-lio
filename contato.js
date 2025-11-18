document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").ariaValueMax.trim();
    const email = document.getElementById("email").ariaValueMax.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const feedback = document.getElementById("feedback");

    if (!nome || !email || !assunto || !mensagem) {
        feedback.textContent = "Por favor, preencha todos os campos! ⚠️";
        feedback.style.color = "red";
        return
    }

    feedback.textContent = "⏳ Enviando mensagem...";
    feedback.style.color = "#ff7f50";

    setTimeout(() => {
        feedback.textContent = "💌 Mensagem enviada com sucesso!";
        feedback.style.color = "green";
        document.getElementById("formContato").reset();
    }, 1500);
});