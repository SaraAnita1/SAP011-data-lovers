export function ordenacao(nomesfilmes, ordenar) {
  nomesfilmes.sort((a, b) => {
    const tituloA = a.getAttribute("data-title");
    const tituloB = b.getAttribute("data-title");

    if (ordenar === "A-Z") {
      return tituloA.localeCompare(tituloB);
    } else if (ordenar === "Z-A") {
      return tituloB.localeCompare(tituloA);
    }
  });
  return nomesfilmes;
}

export function pesquisa(filmes, termoBusca, diretorSelecionado) {
  filmes.forEach((filme) => {
    const diretorFilme = filme.getAttribute("data-director").toLowerCase();
    const tituloFilme = filme
      .querySelector("#filme strong")
      .textContent.toLowerCase();

    const diretorMatch =
      diretorSelecionado === "todos" || diretorFilme === diretorSelecionado;
    const buscaMatch = tituloFilme.includes(termoBusca);

    if (diretorMatch && buscaMatch) {
      filme.style.display = "block"; // Mostrar o filme
    } else {
      filme.style.display = "none"; // Ocultar o filme
    }
  });
  return filmes;
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
