import { filtrarPorDiretor, ordenacao, atualizarPorcentagens, pesquisa } from "../src/data";



describe("ordenacao", () => {
  it("is a function", () => {
    // Verifica se `ordenacao` é uma função
    expect(typeof ordenacao).toBe("function");
  });

  it("colocar em ordem A-Z", () => {
    const input = [
      { title: "From Up on Poppy Hill" },
      { title: "Castle in the Sky" },
      { title: "Grave of the Fireflies" },
    ];
    const expectedOutput = [
      { title: "Castle in the Sky" },
      { title: "From Up on Poppy Hill" },
      { title: "Grave of the Fireflies" },
    ];

    // Chama a função de ordenação
    const result = ordenacao(input, "A-Z");

    // Verifica se a saída da função é igual à saída esperada
    expect(result).toEqual(expectedOutput);
  });

  it("colocar em ordem Z-A", () => {
    const input = [
      { title: "The Cat Returns" },
      { title: "When Marnie Was There" },
      { title: "Whisper of the Heart" },
    ];
    const expectedOutput = [
      { title: "Whisper of the Heart" },
      { title: "When Marnie Was There" },
      { title: "The Cat Returns" },
    ];

    // Chama a função de ordenação
    const result = ordenacao(input, "Z-A");

    // Verifica se a saída da função é igual à saída esperada
    expect(result).toEqual(expectedOutput);
  });
});

test("A função pesquisa filtra corretamente os filmes", () => {
  const filmes = [
    { title: "The Cat Returns" },
    { title: "When Marnie Was There" },
    { title: "Whisper of the Heart" }, // Adicione um filme com título esperado
  ];

  const termoBusca = "whis";

  const resultados = pesquisa(filmes, termoBusca);

  const resultadoEsperado = [{ title: "Whisper of the Heart" }];

  expect(resultados).toEqual(resultadoEsperado);
});

it("pesquisar por nome do filme que não existe", () => {
  const filmes = [
    { title: 'From Up on Poppy Hill' },
    { title: "Castle in the Sky" },
    { title: "Grave of the Fireflies" },
  ];
  const termoBusca = 'Xuxa'; // Termo de pesquisa
  
  const expectedOutput = [];
  
  // Chama a função de pesquisa
  const resultado = pesquisa(filmes, termoBusca);
  // Verifica se a saída da função é igual à saída esperada
  expect(resultado).toEqual(expectedOutput);
});

describe("filtrar por Diretor", () => {
  it("is a function", () => {
    // Verifica se filtrar por diretor é uma função
    expect(typeof filtrarPorDiretor).toBe("function");
  });

  it("Fazer a filtragem de acordo com o diretor selecionado", () => {
    const input = [
      { director: "Hayao Miyazaki", title: "Castle in the Sky" },
     
    ];
    const expectedOutput = [
      { director: "Hayao Miyazaki", title: "Castle in the Sky" },
    ];

    // Chama a função de filtragem
    const resultado1 = filtrarPorDiretor(input, "Hayao Miyazaki");

    // Verifica se a saída da função é igual à saída esperada
    expect(resultado1).toEqual(expectedOutput);
  });
});


describe("verificar se as porcentagens estão corretas de acordo com o diretor selecionado", () => {
  it("is a function", () => {
    // Verifica se atualizar porcentagens é uma função
    expect(typeof atualizarPorcentagens).toBe("function");
  });

  it("Calcular a porcentagem de filmes do diretor selecionado", () => {
    const input = [
      { director: "Hayao Miyazaki", title: "Castle in the Sky" },
    ];
    
    // Chama a função de atualização de porcentagens
    const porcentagem = atualizarPorcentagens(input, "Hayao Miyazaki");

    // Calcula a porcentagem esperada manualmente
    const filmesDoDiretor = input.filter(filme => filme.director === "Hayao Miyazaki");
    const porcentagemEsperada = (filmesDoDiretor.length / input.length) * 100;

    // Verifica se a porcentagem calculada pela função é igual à esperada
    expect(porcentagem).toEqual(porcentagemEsperada);
  });
});