const pets = [
    { nome: "Sid", especie: "Cachorro", idade: 7, foto: "imagens/amira.jpg" },
    { nome: "Cacau", especie: "Cachorro", idade: 3, foto: "imagens/cacau.jpg" }, 
    { nome: "Nina", especie: "Gato", idade: 4, foto: "imagens/mila.jpg" }, 
    { nome: "Mila", especie: "Cachorro", idade: 6, foto: "imagens/sid.jpg" },
    { nome: "Amira", especie: "Gato", idade: 3, foto: "imagens/max.jpg" } 
]; 
// variaveis
let indicePetAtual = 0; 
let matchesSalvos = JSON.parse(localStorage.getItem("matches")) || [];

// vai carregar o card com os elementos
function carregarPetAtual() {
    const cardElemento = document.getElementById("card-pet");
    const fotoElemento = document.getElementById("fotoPet");
    const nomeElemento = document.getElementById("nomePet");
    const infoElemento = document.getElementById("infoPet");
    const mensagemElemento = document.getElementById("mensagem");

    // para saber se tem mais pets
    if (indicePetAtual < pets.length) {
        const pet = pets[indicePetAtual];
        
        // atualiza os cards 
        fotoElemento.src = pet.foto;
        fotoElemento.alt = `Foto de ${pet.nome}`;
        nomeElemento.textContent = pet.nome;
        infoElemento.textContent = `${pet.especie}, ${pet.idade} ano(s)`;
        
        // mostra o card
        if (cardElemento) cardElemento.style.display = 'block';
        if (mensagemElemento) mensagemElemento.textContent = ''; // tira a mensagem 
        
        // animação do card
        cardElemento.classList.remove('hidden'); 

    } else {
        // 2. final da lista

     if (cardElemento) cardElemento.style.display = 'none'; 
        // esconder o card 

        if (mensagemElemento) mensagemElemento.textContent = "Acabaram os pets para Match hoje! 😴";
    }
}

// 3. função de like e dislike
function acaoPet(tipo) {
    if (indicePetAtual >= pets.length) {
        return; 
    }

    const petAtual = pets[indicePetAtual];

    // função para salvar o match
    if (tipo === 'like') {
        matchesSalvos.push(petAtual);
        localStorage.setItem("matches", JSON.stringify(matchesSalvos));
        console.log(`Match dado com ${petAtual.nome}!`);
    } else {
        console.log(`Dislike em ${petAtual.nome}.`);
    }

    // efeito no card de transição
    const cardElemento = document.getElementById("card-pet");
    if (cardElemento) {
        

        cardElemento.classList.add(tipo === 'like' ? 'swipe-right' : 'swipe-left');

        // função para passar de pet
        setTimeout(() => {
            
            cardElemento.classList.remove('swipe-right', 'swipe-left');
            cardElemento.classList.add('hidden');

            
            indicePetAtual++;
            carregarPetAtual();
        }, 300); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //para carregar o primero pet
    carregarPetAtual(); 

    // função para o like e dislike funcionar
    const likeBtn = document.getElementById("like");
    const dislikeBtn = document.getElementById("dislike");

    if (likeBtn) likeBtn.addEventListener('click', () => acaoPet('like'));
    if (dislikeBtn) dislikeBtn.addEventListener('click', () => acaoPet('dislike'));
});