// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Elementos do HTML
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco

    if (nomeAmigo === "") {
        alert("Por favor, digite o nome do amigo.");
        return; // Para a função se o campo estiver vazio
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return; // Para a função se o nome já existir
    }

    listaAmigos.push(nomeAmigo); // Adiciona o nome ao array
    inputAmigo.value = ""; // Limpa o campo de input

    // Atualiza a lista na tela
    const itemLista = document.createElement("li");
    itemLista.textContent = nomeAmigo;
    ulListaAmigos.appendChild(itemLista);

    alert("Amigo adicionado com sucesso!");
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return; // Para a função se não houver amigos suficientes
    }

    // Sorteia um nome aleatório
    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[randomIndex];

    // Exibe o resultado na tela
    ulResultado.innerHTML = `<li>Meu amigo secreto é: ${amigoSorteado}</li>`;
}