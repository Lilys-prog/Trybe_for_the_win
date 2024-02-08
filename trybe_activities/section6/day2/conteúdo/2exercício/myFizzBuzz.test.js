const myFizzBuzz = require('./myFizzBuzz');

describe('Tests the myFizzBuzz function', () => {

  // verifica se a função myFizzBuzz existe
  it('Verifies if the function myFizzBuzz exists', () => {
    expect(typeof myFizzBuzz).toBe('function')
  })

  // Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
  it('Verifies if the function returns `fizzbuzz` when receives a multiple of 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  // Caso num seja um número divisível apenas por 3, a função retorna "fizz".
  it('Verifies if the function returns `fizz` when receives a multiple of 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  // Caso num seja um número divisível apenas por 5, a função retorna "buzz".  
  it('Verifies if the function returns "buzz" when receives a multiple of 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  // Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
  it('Verifies if the function returns the parameter when its not multiple of 3 or 5', () => {
    expect(myFizzBuzz(8)).toBe(8);
  })

  // Caso num não seja um número, a função retorna false.
  it('Verifies if the function returns false when doesn`t receive a number', () => {
    expect(myFizzBuzz('NaN')).toBe(false);
  })
})