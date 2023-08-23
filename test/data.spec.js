import { ordenacao } from '../src/data';

describe('ordenacao', () => {
  it('is a function', () => {
    // Verifica se `ordenacao` é uma função
    expect(typeof ordenacao).toBe('function');
  });

  it('colocar em ordem A-Z', () => {
    const input = ['From Up on Poppy Hill', 'Castle in the Sky', 'Grave of the Fireflies'];
    const expectedOutput = ['Castle in the Sky', 'From Up on Poppy Hill', 'Grave of the Fireflies'];
    
    // Chama a função de ordenação
    const result = ordenacao(input);
    
    // Verifica se a saída da função é igual à saída esperada
    expect(result).toEqual(expectedOutput);
  });

  it('colocar em ordem Z-A', () => {
    const input = ['The Cat Returns', 'When Marnie Was There', 'Whisper of the Heart'];
    const expectedOutput = ['Whisper of the Heart', 'When Marnie Was There', 'The Cat Returns'];
    
    // Chama a função de ordenação
    const result = ordenacao(input);
    
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
