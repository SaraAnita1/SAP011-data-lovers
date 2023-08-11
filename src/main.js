import dados from "./data/ghibli/ghibli.js";

const cardContainer = document.querySelector(".card");

const ghibli = dados.films;

let card = "";

ghibli.map((filme) => {
  card += `
  <div class="card">
  <img class="cardImg" src="${filme.poster}" alt="">
  <div class="descricao">
  <p><strong>Título: ${filme.title}</strong></p>
  <p><strong>Ano: ${filme.release_date}</strong></p>
  </div>
  </div>
  `;
});

cardContainer.innerHTML = card;
