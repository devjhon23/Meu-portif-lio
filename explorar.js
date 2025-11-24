// Carrega pets cadastrados no LocalStorage
const pets = JSON.parse(localStorage.getItem("pets")) || [];
let indice = 0;

let matches = JSON.parse(localStorage.getItem("matches")) || [];

const foto = document.getElementById("fotoPet");
const nome = document.getElementById("nomePet");
const info = document.getElementById("infoPet");
const mensagem = document.getElementById("mensagem");

function mostrarPet() {
    if (indice >= pets.length) {
        foto.src = "";
        nome.textContent = "";
        info.textContent = "";
        mensagem.textContent = "Não há mais pets para visualizar 🐾";
        return;
    }

    const pet = pets[indice];

    foto.src = pet.foto;
    nome.textContent = pet.nome;
    info.textContent = `${pet.especie}, ${pet.idade} ano(s)`;

    mensagem.textContent = "";
}

document.getElementById("proximo").addEventListener("click", () => {
    indice++;
    mostrarPet();
});

document.getElementById("match").addEventListener("click", () => {
    if (indice < pets.length) {
        matches.push(pets[indice]);
        localStorage.setItem("matches", JSON.stringify(matches));

        mensagem.textContent = `${pets[indice].nome} foi para seus matches! 💖`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    mostrarPet();
});

// Variáveis
let indicePetAtual = 0;
let matchesSalvos = JSON.parse(localStorage.getItem("matches")) || [];

// Função: Carregar Pet Atual na tela
function carregarPetAtual() {
    const cardElemento = document.getElementById("card-pet");
    const fotoElemento = document.getElementById("fotoPet");
    const nomeElemento = document.getElementById("nomePet");
    const infoElemento = document.getElementById("infoPet");
    const mensagemElemento = document.getElementById("mensagem");

    // Verifica se ainda há pets
    if (indicePetAtual < pets.length) {
        const pet = pets[indicePetAtual];

        // Atualiza informações
        fotoElemento.src = pet.foto;
        fotoElemento.alt = `Foto de ${pet.nome}`;
        nomeElemento.textContent = pet.nome;
        infoElemento.textContent = `${pet.especie}, ${pet.idade} ano(s)`;

        // Mostra card
        if (cardElemento) cardElemento.style.display = "block";

        if (mensagemElemento) mensagemElemento.textContent = "";

        // Animação
        cardElemento.classList.remove("hidden");

    } else {
        // Acabaram os pets
        if (cardElemento) cardElemento.style.display = "none";

        if (mensagemElemento)
            mensagemElemento.textContent = "Acabaram os pets para Match hoje! 😴";
    }
}

// Função de Like / Dislike
function acaoPet(tipo) {
    if (indicePetAtual >= pets.length) return;

    const petAtual = pets[indicePetAtual];
    const cardElemento = document.getElementById("card-pet");

    // LIKE → salva match
    if (tipo === "like") {
        matchesSalvos.push(petAtual);
        localStorage.setItem("matches", JSON.stringify(matchesSalvos));
        console.log(`Match dado com ${petAtual.nome}!`);
    } else {
        console.log(`Dislike em ${petAtual.nome}.`);
    }

    // Animação
    if (cardElemento) {
        cardElemento.classList.add(tipo === "like" ? "swipe-right" : "swipe-left");

        // Espera animação e passa para o próximo
        setTimeout(() => {
            cardElemento.classList.remove("swipe-right", "swipe-left");
            cardElemento.classList.add("hidden");

            indicePetAtual++;
            carregarPetAtual();
        }, 300);
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    carregarPetAtual();

    const likeBtn = document.getElementById("like");
    const dislikeBtn = document.getElementById("dislike");

    if (likeBtn) likeBtn.addEventListener("click", () => acaoPet("like"));
    if (dislikeBtn) dislikeBtn.addEventListener("click", () => acaoPet("dislike"));
});
