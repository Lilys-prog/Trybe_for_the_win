const { getHarryPotterMovie,
  verifyMovieByYear,
  addHarryPotterMovie,
  getArrayWithActors } = require('./script')

  // estrutura do teste:
  // it('mensagem explicando o teste', () => {})
  // it('mensagem explicando o teste', () => {
      // expect(ação).matcher(resultado esperado da ação);
  // })

  // OBS: pode haver mais de um expect dentro do escopo de um it


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

  // estrutura completa:
  describe('', () => {
    it('', () => {
      expect().toBe();
    });
  })
  // o toBe é somente um dos matchers possíveis, bem comum

  // matcher útil para o throw: .toThrow('mensagem de erro'). Mas neste caso se monta uma função no expect. Exemplo:

  expect(() => função('parâmetro')).toThrow('mensagem de erro')

  // se não colocar nesse formato o .toThrow não passa no teste

  // matchers para objeto (isso inclui array): .toEqual, .toStrictEqual(value)

  // a documentação no site do jest associa os melhores matchers pros casos mais comuns