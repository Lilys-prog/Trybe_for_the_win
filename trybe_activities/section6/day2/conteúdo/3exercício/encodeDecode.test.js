const { encode, decode } = require('./encodeDecode');

// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

describe('It tests the `encode` function', () => {  
  it('Verifies if `encode` is a function', () => {
    expect(typeof encode).toBe('function');
  })

  it('verifies if the parameter ("aeiou") returns ("12345")', () => {
    expect(encode('aeiou')).toBe("12345");
  })

  it('verifies if consonants returns uncoded', () => {
    expect(encode('bcdfg')).toBe('bcdfg');
  })

  it('verifies if the parameter and the return have the same number of characters', () => {
    expect(encode('eieio').length).toBe(5);
  })
})

describe('It tests the `decode` function', () => {
  it('verifies if "decode" is a function', () => {
    expect(typeof decode).toBe('function');
  })

  it('verifies if the parameter ("12345") returns ("aeiou")', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  it('verifies if a parameter of characters different of ("12345") return uncoded', () => {
    expect(decode('67890')).toBe('67890');
  })

  it('verifies if the parameter and the return have the same number of characters', () => {
    expect(decode('12125').length).toBe(5);
  })
})