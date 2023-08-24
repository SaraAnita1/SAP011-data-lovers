// import ghibli from "./data/ghibli/ghibli";

export function ordenacao(nomesfilmes, ordenar) {
  nomesfilmes.sort((a, b) => {
    const tituloA = a.title;
    const tituloB = b.title;

    if (ordenar === "A-Z") {
      return tituloA.localeCompare(tituloB);
    } else if (ordenar === "Z-A") {
      return tituloB.localeCompare(tituloA);
    }
  });
  return nomesfilmes;
}

export function pesquisa(filmes, termoBusca) {
  return filmes.filter((filme) =>
    filme.title.toLowerCase().includes(termoBusca)
  );
}

export function ordenacaoDiretor(filmes, diretorSelecionado) {
  filmes.forEach((filme) => {
    const diretorFilme = filme.getAttribute("data-director");

    if (diretorSelecionado === "todos" || diretorFilme === diretorSelecionado) {
      filme.style.display = "block"; // Mostrar o filme
    } else {
      filme.style.display = "none"; // Ocultar o filme
    }
  });
}
