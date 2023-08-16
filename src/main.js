import dados from "./data/ghibli/ghibli.js";



const cardContainer = document.querySelector(".card");

const ghibli = dados.films;

let card = "";

ghibli.map((filme) => {
  card += `

  <div class="containerImg filme" data-director="${filme.director}">
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

const filtroDiretor = document.getElementById('filtroDiretor');

function atualizarVisibilidadeFilmes() {
  const diretorSelecionado = filtroDiretor.value;
  const filmes = cardContainer.querySelectorAll('.filme');

  filmes.forEach(filme => {
    const diretorFilme = filme.getAttribute('data-director');

    if (diretorSelecionado === 'todos' || diretorFilme === diretorSelecionado) {
      filme.style.display = 'block'; // Mostrar o filme
    } else {
      filme.style.display = 'none'; // Ocultar o filme
    }
  });
}

filtroDiretor.addEventListener('change', atualizarVisibilidadeFilmes);







