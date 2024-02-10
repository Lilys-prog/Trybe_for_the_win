
// função multiplica parâmetro por 2. Se o parâmetro fornecido não for um número a função lança um erro
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido');
  }
  return number * 2;
};

// o primeiro teste verifica se a função funciona corretamente ao receber um parâmetro numérico
// o segundo teste verifica se um erro é lançado quando o parâmetro não é um número
// o terceiro confirma a mensagem de erro enviada, caso ocorra erro7
test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrow(new Error('number é indefinido'));
});