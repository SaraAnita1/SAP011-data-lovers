import dados from "./data/ghibli/ghibli.js";

import { ordenacao } from "./data.js";

import { pesquisa } from "./data.js";

import { ordenacaoDiretor } from "./data.js";

const cardContainer = document.querySelector(".card");

const ghibli = dados.films;

let card = "";

ghibli.map((filme) => {
  card += `

  <div class="containerImg filme" data-director="${filme.director}" data-title=${filme.title}>
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

const filtroDiretor = document.getElementById("filtroDiretor");
const porcentagemContainer = document.getElementById("porcentagemContainer"); // Div onde a porcentagem será exibida
const filmes = cardContainer.querySelectorAll(".filme");

function atualizarPorcentagens(diretorSelecionado) {
  
  const totalFilmes = filmes.length;

  const filmesDoDiretor = Array.from(filmes).filter(filme => filme.getAttribute("data-director") === diretorSelecionado);
  const porcentagem = (filmesDoDiretor.length / totalFilmes) * 100;
  porcentagemContainer.innerHTML = ""; // Limpar as porcentagens exibidas
  const porcentagemElement = document.createElement("p");
  porcentagemElement.textContent = `${diretorSelecionado}: ${porcentagem}%`;
  porcentagemContainer.appendChild(porcentagemElement);
  
}

function atualizarVisibilidadeFilmes() {
  const diretorSelecionado = filtroDiretor.value;
  // const filmes = cardContainer.querySelectorAll(".filme");

  ordenacaoDiretor(filmes, diretorSelecionado);

  if (diretorSelecionado !== "todos") {
    atualizarPorcentagens(diretorSelecionado);
  } else {
    porcentagemContainer.innerHTML = ""; // Limpar as porcentagens exibidas
    }
    
}

filtroDiretor.addEventListener("change", atualizarVisibilidadeFilmes);

const ordenarAz = document.getElementById("ordenarAz");

function atualizarVisibilidadeAz() {
  const ordenar = ordenarAz.value;
  const filmesContainer = document.querySelector(".card");

  //o método sort() é um método de array, não de string. Para ordenar uma lista de filmes, é necessário primeiro criar um array de objetos de filme com seus respectivos títulos e, em seguida, ordená-los.
  let nomesfilmes = Array.from(filmesContainer.querySelectorAll(".filme"));

  nomesfilmes = ordenacao(nomesfilmes, ordenar);

  // Limpa o container antes de reordenar os filmes
  filmesContainer.innerHTML = "";

  // Adiciona os filmes reordenados de volta ao container
  nomesfilmes.forEach((filme) => {
    filmesContainer.appendChild(filme);
  });
}

ordenarAz.addEventListener("change", atualizarVisibilidadeAz);

const barraBusca = document.getElementById("campoPesquisar");

function atualizarVisibilidade() {
  const diretorSelecionado = filtroDiretor.value.toLowerCase();
  const termoBusca = barraBusca.value.trim().toLowerCase();
  const filmes = cardContainer.querySelectorAll(".filme");

  pesquisa(filmes, termoBusca, diretorSelecionado);
}

filtroDiretor.addEventListener("change", atualizarVisibilidade);
barraBusca.addEventListener("input", atualizarVisibilidade);


