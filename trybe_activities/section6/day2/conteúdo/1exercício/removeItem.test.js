const removeItem = require('./removeItem');

describe('Testa o funcionamento da função removeItem', () => {

  // Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
  it('Verifies if the return brings the right array', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  // Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
  it('Verifies if the function doesn`t return the original array', () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  // Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
  it('verifies if with a not-element as parameter, it returns the original array', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})