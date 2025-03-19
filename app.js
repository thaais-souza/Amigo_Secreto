
let listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco

    if (nomeAmigo === "") {
        alert("Por favor, digite o nome do amigo.");
        return; 
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return; 
    }

    listaAmigos.push(nomeAmigo); 
    inputAmigo.value = ""; // Limpa o campo de input

    // Atualiza a lista na tela
    const itemLista = document.createElement("li");
    itemLista.textContent = nomeAmigo;
    ulListaAmigos.appendChild(itemLista);

    alert("Amigo adicionado com sucesso!");
}
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return; // Para a função se não houver amigos suficientes
    }
    

    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[randomIndex];
    ulResultado.innerHTML = `<li>Meu amigo secreto é: ${amigoSorteado}</li>`;

    // Limpa a lista de nomes da tela
    ulListaAmigos.innerHTML = "";
}