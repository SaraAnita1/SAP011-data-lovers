<<<<<<< Updated upstream
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
=======
import dados from "./data/ghibli/ghibli.js";

const cardContainer = document.querySelector(".card");

const ghibli = dados.films;

let card = "";

ghibli.map((filme) => {
  card += `
        <div class="cardContainer">
       <div class="card">
          <img src="${filme.poster}" alt="" />
          <p>Titulo: ${filme.title}</p>
          <p>Ano: ${filme.release_date}</p>
        </div>
   </div>
  `;
});

cardContainer.innerHTML = card;
>>>>>>> Stashed changes
