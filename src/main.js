import dados from "./data/ghibli/ghibli.js";



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


const ordenarAz = document.getElementById('ordenarAz');

function atualizarVisibilidadeAz() {
  const ordenar = ordenarAz.value;
  const filmesContainer = document.querySelector('.card');


//o método sort() é um método de array, não de string. Para ordenar uma lista de filmes, é necessário primeiro criar um array de objetos de filme com seus respectivos títulos e, em seguida, ordená-los.
  const nomesfilmes = Array.from(filmesContainer.querySelectorAll('.filme'));

  nomesfilmes.sort((a, b) => {
    const tituloA = a.getAttribute('data-title');
    const tituloB = b.getAttribute('data-title');

    if (ordenar === 'A-Z') {
      return tituloA.localeCompare(tituloB);
    } else if (ordenar === 'Z-A') {
      return tituloB.localeCompare(tituloA);
    }
  });

  // Limpa o container antes de reordenar os filmes
  filmesContainer.innerHTML = '';

  // Adiciona os filmes reordenados de volta ao container
  nomesfilmes.forEach(filme => {
    filmesContainer.appendChild(filme);
  });
}

ordenarAz.addEventListener('change', atualizarVisibilidadeAz);








