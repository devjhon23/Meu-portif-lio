function exibirMatches() {
    const lista = document.getElementById("lista-matches");
    const mensagem = document.getElementById("mensagem");

    // Tenta obter os matches salvos ou retorna um array vazio
    const matches = JSON.parse(localStorage.getItem("matches")) || [];

    if (lista) { 
        lista.innerHTML = ''; // Limpa o conteúdo antes de carregar
    }

    if (matches.length === 0) {
        if (mensagem) {
            mensagem.textContent = "Você ainda não deu match com nenhum pet 😿";
        }
        return;
    }
    
    if (mensagem) {
        mensagem.textContent = ""; // Oculta a mensagem se houver matches
    }


    matches.forEach((pet) => {
        // CORREÇÃO 1: Cria um elemento <a> (link)
        const linkChat = document.createElement("a");
        // CORREÇÃO 2: Adiciona o link para a página de chat, passando o nome do pet na URL
        // Exemplo de URL: chat.html?pet=Kira
        // Usamos encodeURIComponent para garantir que nomes com espaços sejam tratados corretamente
        linkChat.href = `chat.html?pet=${encodeURIComponent(pet.nome)}`;
        linkChat.classList.add("match-link"); // Adiciona uma classe para estilização (opcional)

        const card = document.createElement("div");
        card.classList.add("card");

        // CORREÇÃO 3: Adiciona um texto de ação dentro do card
        card.innerHTML = `
            <img src="${pet.foto}" alt="Foto de ${pet.nome}">
            <div class="card-info">
                <h3>${pet.nome}</h3> 
                <p>${pet.especie}, ${pet.idade} ano(s)</p>
                <p class="chat-action">Clique para iniciar o Chat</p> 
            </div>
        `;

        // CORREÇÃO 4: Coloca o elemento card dentro do elemento link
        linkChat.appendChild(card); 

        if (lista) {
            lista.appendChild(linkChat);
        }
    });
}

document.addEventListener("DOMContentLoaded", exibirMatches);