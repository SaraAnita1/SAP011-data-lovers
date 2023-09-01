
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
//refazer a logica
export function filtrarPorDiretor(filmes, diretorSelecionado) {
  return filmes.filter((filme) => filme.director.includes(diretorSelecionado));
}

export function atualizarPorcentagens(filmes, diretorSelecionado) {
  const filmesDoDiretor = filtrarPorDiretor(filmes, diretorSelecionado);
  const porcentagem = (filmesDoDiretor.length / filmes.length) * 100;

  return porcentagem;
}
