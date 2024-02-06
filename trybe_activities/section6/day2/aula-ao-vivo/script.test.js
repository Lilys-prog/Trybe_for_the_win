const {
  getHarryPotterMovie,
  verifyMovieByYear,
  addHarryPotterMovie,
  getArrayWithActors } = require('./script')

// 'Testa função que adiciona filmes.'
describe('Requisito 1 - Testa função que adiciona filmes - addHarryPotterMovie', () => {
  // 1- 'Verifica se a função addHarryPotterMovie existe.'
  it('1 - Verifica se a função addHarryPotterMovie existe', () => {
    expect(typeof addHarryPotterMovie).toBe('function')
  })
  // 2- 'Verifica se a função addHarryPotterMovie, ao receber o ano 2011 como parâmetro, retorna o texto "No ano 2011 foi lançado o filme Harry Potter e as Relíquias da Morte - Parte 2".'
  test('2 - Verifica se a função addHarryPotterMovie, ao receber o ano 2011 como parâmetro, retorna o texto correto', () => {
    expect(addHarryPotterMovie(2011)).toBe('No ano 2011 foi lançado o filme Harry Potter e as Relíquias da Morte - Parte 2');
  })
  // 3- 'Verifica se a função addHarryPotterMovie, ao receber o ano 2008 como parâmetro, retorna o texto "No ano 2008 não foi lançado nenhum filme do Harry Potter".'
  it('3 - Verifica se a função addHarryPotterMovie, ao receber o ano 2008 como parâmetro, retorna o texto correto', () => {
    expect(addHarryPotterMovie(2008)).toBe('No ano 2008 não foi lançado nenhum filme do Harry Potter')
  })
  // 4- 'Verifica se a função addHarryPotterMovie, ao receber "undefined" como parâmetro, retorna um erro com a mensagem: "Valor inesperado. Insira um número.".'
  it('4 - Verifica se a função addHarryPotterMovie, ao receber "undefined" como parâmetro, retorna um erro', () => {
    expect(addHarryPotterMovie(undefined)).toBe('Valor inesperado. Insira um número.')
  })
  // 5- 'Verifica se a função addHarryPotterMovie, ao receber "xablau" como parâmetro, retorna um erro com a mensagem: "Valor inesperado. Insira um número.".'
  it('5 - Verifica se a função addHarryPotterMovie, ao receber "xablau" como parâmetro, retorna um erro', () => {
    expect(addHarryPotterMovie('xablau')).toBe('Valor inesperado. Insira um número.')
  })
})

// =============================================

// 'Testa função que fornece o título do filme ou um erro.'
describe('Requisito 2 - Testa função que fornece o título do filme ou um erro - getHarryPotterMovie', () => {
  // 1- 'Verifica se a função getHarryPotterMovie existe.'
  it('1 - Verifica se a função getHarryPotterMovie existe', () => {
    expect(typeof getHarryPotterMovie).toBe('function')
  })
  // 2- 'Verifica se a função getHarryPotterMovie, ao receber o ano 2010 como parâmetro, retorna o filme "Harry Potter e as Relíquias da Morte - Parte 1".'
  it('2 - Verifica se a função getHarryPotterMovie, ao receber o ano 2010 como parâmetro, retorna o filme correto', () => {
    expect(getHarryPotterMovie(2010)).toBe('Harry Potter e as Relíquias da Morte - Parte 1')
  })
  // 3- 'Verifica se a função getHarryPotterMovie, ao receber o ano 2015 como parâmetro, lança um erro e retorna o texto "No ano 2015 não foi lançado nenhum filme do Harry Potter'
  it('3 - Verifica se a função getHarryPotterMovie, ao receber o ano 2015 como parâmetro, lança um erro', () => {
    expect(() => getHarryPotterMovie(2015)).toThrow('No ano 2015 não foi lançado nenhum filme do Harry Potter')
  })
  // 4- 'Verifica se a função getHarryPotterMovie, ao receber "xablau" como parâmetro, lança um erro e retorna o texto "Valor inesperado. Insira um número.'
  it('4 - Verifica se a função getHarryPotterMovie, ao receber "xablau" como parâmetro, lança um erro', () => {
    expect(() => getHarryPotterMovie('xablau')).toThrow('Valor inesperado. Insira um número.')
  })
})


// =============================================

// 'Testa função que fornece o título do filme.'
// 1- 'Verifica se a função verifyMovieByYear existe.'

// 2- 'Verifica se a função verifyMovieByYear, ao receber o ano 2010 como parâmetro, retorna o filme "Harry Potter e as Relíquias da Morte - Parte 1".'

// 3- 'Verifica se a função verifyMovieByYear, ao receber o ano 2015 como parâmetro, retorna "undefined".'


// ===================== USANDO TDD ========================

// 'Testa função que fornece o array com principais atores dos filmes.'
describe('Requisito 4 - Testa função que fornece o array com principais atores dos filmes - getArrayWithActors', () => {
  // 1- 'Verifica se a função getArrayWithActors existe.'
  it('1 - Verifica se a função getArrayWithActors existe', () => {
    expect(typeof getArrayWithActors).toBe('function')
  })
  // 2- 'Verifica se a função getArrayWithActors, ao receber o ano 2011 como parâmetro, retorna um array com os principais atores do filme deste ano.'
  test('2 - Verifica se a função getArrayWithActors, ao receber o ano 2011 como parâmetro, retorna um array', () => {
    const array = [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint",
      "Alan Rickman",
      "Maggie Smith"
    ];
    expect(getArrayWithActors(2011)).toEqual(array);
  })

})