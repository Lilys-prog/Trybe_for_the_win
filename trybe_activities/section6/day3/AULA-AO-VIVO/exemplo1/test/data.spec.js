const data = require('../src/data');

describe('tests for the database', () => {
  it('verifies if the database is an object', () => {
    expect(typeof data).toBe('object');
  });

  it('verifies if the database has 31 teams', () => {
    // expect(data.clubs.length).toBe(31);      / UMA FORMA DE VERIFICAR /
    expect(data.clubs).toHaveLength(31);        // OUTRA FORMA DE VERIFICAR /
  });

  it('verifies if the object of "Manchester United" is on the database', () => {
    expect(data.clubs).toContainEqual({
      name: 'Manchester United',
      country: 'Inglaterra',
      years: [1999, 2008],
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/640px-Manchester_United_FC_crest.svg.png',
    });
  });

  it('verifies if all the teams objects have the key "name"', () => {
    for (let index = 0; index < data.clubs.length; index += 1) {
      expect(data.clubs[index]).toHaveProperty('name');
    }
  });

  it('verifies if when looking for the team on the 50th position of the array, the result is "undefined"', () => {
    // expect(data.clubs[50]).toBe(undefined);       / UMA FORMA DE FAZER /
    expect(data.clubs[50]).toBeUndefined();          // MAIS ESPECÍFICO
  });


  // UMA FORMA DE FAZER /:
  // it('verifies if there is a team with the name starting with a given letter', () => {
  //   const verifyFirstLetter = (letter) => {
  //     for(let index = 0; index < data.clubs.length; index += 1) {
  //       if (data.clubs[index].name[0] === letter) {
  //         return true;
  //       }
  //     }
  //     return 'Nenhum time encontrado'
  //   }

  //   expect(verifyFirstLetter('M')).toBe(true);
  // });

  // OUTRA FORMA DE FAZER: USANDO REGEX
  it('verifies if there is a team with the name starting with a given letter', () => {
    const verifyFirstLetter = (letter) => {
      for (let index = 0; index < data.clubs.length; index += 1) {
        if (data.clubs[index].name[0] === letter) {
          return data.clubs[index].name;
        }
      }
      return 'Nenhum time encontrado'
    }

    expect(verifyFirstLetter('M')).toMatch(/^M/);
  });

});