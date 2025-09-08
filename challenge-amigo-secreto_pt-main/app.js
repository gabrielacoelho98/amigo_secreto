//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// ==============================
// — Lógica do Amigo Secreto

// lista para guardar os nomes
let amigos = [];

// adiciona um amigo na lista
function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value;

  if (nome === "") {
    document.getElementById("resultado").innerHTML = "<li>Digite um nome válido.</li>";
    return;
  }

  if (amigos.includes(nome)) {
    document.getElementById("resultado").innerHTML = "<li>Esse nome já foi adicionado.</li>";
    return;
  }

  amigos.push(nome);
  mostrarLista();
  input.value = "";
  document.getElementById("resultado").innerHTML = "";
}

// mostra a lista de amigos na tela
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

// sorteia um amigo
function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length < 2) {
    resultado.innerHTML = "<li>Adicione pelo menos 2 nomes para sortear.</li>";
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indice];

  resultado.innerHTML = "<li>🎉 Seu amigo secreto é: <strong>" + sorteado + "</strong></li>";
}
