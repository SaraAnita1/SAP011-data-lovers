import dados from "./data/ghibli/ghibli.js";

import { ordenacao } from "./data.js";

import { pesquisa } from "./data.js";

import { filtrarPorDiretor } from "./data.js";

import { atualizarPorcentagens } from "./data.js";

const cardContainer = document.querySelector(".card");

const filmes = dados.films;

function criandoCardsFilmes(array) {
  let card = "";
  array.map((filme) => {
    card += `

  <div class="containerImg filme oculto visivel" data-director="${filme.director}" data-title=${filme.title}>
     <div class="flip">
        <div class="front">
          <img class="cardImg" src="${filme.poster}" alt="">
          <div class="descricao">
          <p id="filme"><strong>Título: ${filme.title}</strong></p>
          <p id="ano"><strong>Ano: ${filme.release_date}</strong></p>
          </div>
        </div>
        <div class="back">
          <p>Diretor: ${filme.director}</p>
          <p>Produtor: ${filme.producer}</p>
          <p>Sinopse: ${filme.description}</p>
        </div>
    </div> 
  </div>
  
  `;
  });

  cardContainer.innerHTML = card;
}

criandoCardsFilmes(filmes);

const filtroDiretor = document.getElementById("filtroDiretor");

const diretorSelecionado =
  filtroDiretor.options[filtroDiretor.selectedIndex].value;
atualizarPorcentagens(filmes, diretorSelecionado);

const porcentagemContainer = document.getElementById("porcentagemContainer"); // Div onde a porcentagem será exibida

function atualizarVisibilidadeFilmes() {
  // const filmes = cardContainer.querySelectorAll(".filme");
  const diretorSelecionado =
    filtroDiretor.options[filtroDiretor.selectedIndex].value;

  if (diretorSelecionado !== "todos") {
    atualizarPorcentagens(filmes, diretorSelecionado);
  } else {
    porcentagemContainer.innerHTML = ""; // Limpar as porcentagens exibidas
  }

  // const filmesDoDiretor = Array.from(filmes).filter(
  //   (filme) => filme.getAttribute("data-director") === diretorSelecionado
  // );

  const filmesDoDiretor = filtrarPorDiretor(filmes, diretorSelecionado);
  criandoCardsFilmes(filmesDoDiretor);

  const resultadoPorcentagem = atualizarPorcentagens(
    filmes,
    diretorSelecionado
  );

  porcentagemContainer.innerHTML = ""; // Limpar as porcentagens exibidas
  const porcentagemElement = document.createElement("p");
  porcentagemElement.textContent = `${diretorSelecionado}: ${resultadoPorcentagem}%`;
  porcentagemContainer.appendChild(porcentagemElement);
}

filtroDiretor.addEventListener("change", atualizarVisibilidadeFilmes);

const ordenarAz = document.getElementById("ordenarAz");

function atualizarVisibilidadeAz() {
  const ordenar = ordenarAz.value;
  const filmesContainer = document.querySelector(".card");

  //o método sort() é um método de array, não de string. Para ordenar uma lista de filmes, é necessário primeiro criar um array de objetos de filme com seus respectivos títulos e, em seguida, ordená-los.
  // let nomesfilmes = Array.from(filmesContainer.querySelectorAll(".filme"));

  const ghibliOrdenado = ordenacao(filmes, ordenar);

  // Limpa o container antes de reordenar os filmes
  filmesContainer.innerHTML = "";
  criandoCardsFilmes(ghibliOrdenado);
}

ordenarAz.addEventListener("change", atualizarVisibilidadeAz);

const barraBusca = document.getElementById("campoPesquisar");

function atualizarVisibilidade() {
  // const diretorSelecionado = filtroDiretor.value.toLowerCase();
  const termoBusca = barraBusca.value.trim().toLowerCase();
  // const filmes = cardContainer.querySelectorAll(".filme");

  const ghibliPesquisa = pesquisa(filmes, termoBusca);

  criandoCardsFilmes(ghibliPesquisa);
}

// filtroDiretor.addEventListener("change", atualizarVisibilidade);
barraBusca.addEventListener("input", atualizarVisibilidade);
