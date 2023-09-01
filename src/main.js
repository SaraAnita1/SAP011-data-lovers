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

const porcentagemContainer = document.getElementById("porcentagemContainer"); // Div onde a porcentagem será exibida

function atualizarVisibilidadeFilmes() {
 
  const diretorSelecionado =
    filtroDiretor.options[filtroDiretor.selectedIndex].value;
  if (diretorSelecionado !== "todos") {
    const filmesDoDiretor = filtrarPorDiretor(filmes, diretorSelecionado);
    criandoCardsFilmes(filmesDoDiretor);

    const resultadoPorcentagem = atualizarPorcentagens(filmes, diretorSelecionado);

    porcentagemContainer.innerHTML = "";
    const porcentagemElement = document.createElement("p");
    porcentagemElement.textContent = `${diretorSelecionado}: ${resultadoPorcentagem}%`;
    porcentagemContainer.appendChild(porcentagemElement);
  } else {
    porcentagemContainer.innerHTML = "";
    criandoCardsFilmes(filmes);
  }
} 

filtroDiretor.addEventListener("change", atualizarVisibilidadeFilmes);

const ordenarAz = document.getElementById("ordenarAz");

function atualizarVisibilidadeAz() {
  const ordenar = ordenarAz.value;
  const filmesContainer = document.querySelector(".card");
  const ghibliOrdenado = ordenacao(filmes, ordenar);

  // Limpa o container antes de reordenar os filmes
  filmesContainer.innerHTML = "";
  criandoCardsFilmes(ghibliOrdenado);
}

ordenarAz.addEventListener("change", atualizarVisibilidadeAz);

const barraBusca = document.getElementById("campoPesquisar");

function atualizarVisibilidade() {
  
  const termoBusca = barraBusca.value.trim().toLowerCase();
  

  const ghibliPesquisa = pesquisa(filmes, termoBusca);

  criandoCardsFilmes(ghibliPesquisa);
}


barraBusca.addEventListener("input", atualizarVisibilidade);
