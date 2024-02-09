const findClubByYear = require('../src/findClubByYear');

describe('tests for the function findClubByYear', () => {
  it('tests if the function is defined', () => {
    expect(findClubByYear).toBeDefined();
  });

  it('tests if findClubByYear is a function', () => {
    expect(typeof findClubByYear).toBe('function');
  });

  it('verifies if with the parameter `2015` te functions returns `O campeão mundial no ano de 2015 foi o Barcelona`', () => {
    expect(findClubByYear(2015)).toBe('O campeão mundial no ano de 2015 foi o Barcelona');
  })

  it('tests if with the parameter 1930, the function throws an error and returns "Não houve campeão mundial no ano de 1930"', () => {
    expect(() => findClubByYear(1930)).toThrow('Não houve campeão mundial no ano de 1930');
  })
})