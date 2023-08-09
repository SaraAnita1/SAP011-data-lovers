

import dados from './data/ghibli/ghibli.js'

const cardContainer = document.querySelector(".card")
const descricao = document.querySelector(".cardDescricao")


 
cardContainer.innerHTML = ghibli
descricao.innerHTML = ghibli
// console.log(dados.films[0].title) como chamar uma propriedade especifica.

const ghibli = dados.films;

dados.map( ghibli => `
      <div class="card">
      <img class="cardImg"  scr=${ghibli[0].poster}>
      </div>
      
    `
)

//    <div class="cardDescricao">
//       <p><strong>Título:</strong>${dados.films[0].title}</p>
//       console.log(`dados,films[0].title`)
//       <p><strong>Ano:</strong>${dados.films[0].release_date}</p>
//       </div>