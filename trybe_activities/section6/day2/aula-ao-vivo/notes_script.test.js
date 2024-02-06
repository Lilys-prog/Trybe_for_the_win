const { getHarryPotterMovie,
  verifyMovieByYear,
  addHarryPotterMovie,
  getArrayWithActors } = require('./script')

  // estrutura do teste:
  // it('mensagem explicando o teste', () => {})
  // it('mensagem explicando o teste', () => {
      // expect(ação).matcher(resultado esperado da ação);
  // })


  // exemplo:
  it('1 - verifies if the function addHarryPotterMovie exists', () => {
    expect(typeof addHarryPotterMovie).toBe('function');
  })

  // além disso, pode-se dividir os testes em seções usando "describe"
  // estrutura:
  // describe('texto que explica o bloco', () => {
    // testes do bloco (its da vida)
  // })
  describe('testes da função x', () => {
    it(etc)
    it(etc)
  });