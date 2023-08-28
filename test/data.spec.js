import { ordenacao } from "../src/data";

import { pesquisa } from "../src/data";

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

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

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