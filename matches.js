function exibirMatches() {
    const lista = document.getElementById("lista-matches");
    const mensagem = document.getElementById("mensagem");

 
    const matches = JSON.parse(localStorage.getItem("matches")) || [];

    if (lista) { 
        lista.innerHTML = ''; 
    }

    if (matches.length === 0) {
        if (mensagem) {
            mensagem.textContent = "Você ainda não deu match com nenhum pet 😿";
        }
        return;
    }
    
    if (mensagem) {
        mensagem.textContent = ""; 
    }


    matches.forEach((pet) => {
       
        const linkChat = document.createElement("a");
       
        linkChat.href = `chat.html?pet=${encodeURIComponent(pet.nome)}`;
        linkChat.classList.add("match-link"); 

        const card = document.createElement("div");
        card.classList.add("card");

        
        card.innerHTML = `
            <img src="${pet.foto}" alt="Foto de ${pet.nome}">
            <div class="card-info">
                <h3>${pet.nome}</h3> 
                <p>${pet.especie}, ${pet.idade} ano(s)</p>
                <p class="chat-action">Clique para iniciar o Chat</p> 
            </div>
        `;

        linkChat.appendChild(card); 

        if (lista) {
            lista.appendChild(linkChat);
        }
    });
}

document.addEventListener("DOMContentLoaded", exibirMatches);

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("lista-matches");
    const msg = document.getElementById("mensagem");

    const matches = JSON.parse(localStorage.getItem("matches")) || [];

    if (matches.length === 0) {
        msg.textContent = "Nenhum match ainda 😿";
        return;
    }

    msg.textContent = "";

    matches.forEach(pet => {
        const card = document.createElement("div");
        card.classList.add("match-card");

        card.innerHTML = `
            <img src="${pet.foto}" alt="Pet" class="foto-pet">
            <h3>${pet.nome}</h3>
            <p>${pet.especie} • ${pet.idade} anos</p>
        `;

        container.appendChild(card);
    });
});