const harryPotterMovies = require('./data');

// função principal (a que vai de fato adicionar a resposta pro usuário)
const addHarryPotterMovie = (year) => {
  try {
    return `No ano ${year} foi lançado o filme ${getHarryPotterMovie(year)}`;

  } catch (error) {
    return error.message;
  }
}

// FUNÇÃO QUE ADICIONA TEXTO NA SAÍDA DO CONSOLE
const getHarryPotterMovie = (year) => {
  if (isNaN(year)) {
    throw new Error('Valor inesperado. Insira um número.');
  }

  if (verifyMovieByYear(year) === undefined) {
    throw new Error(`No ano ${year} não foi lançado nenhum filme do Harry Potter`);
  } else {
    return verifyMovieByYear(year);
  }
}

// FUNÇÃO QUE FORNECE O TÍTULO DO FILME
const verifyMovieByYear = (year) => {
  for (let index = 0; index < harryPotterMovies.filmes.length; index += 1) {
    if (harryPotterMovies.filmes[index].ano_lancamento === year) {
      return harryPotterMovies.filmes[index]['titulo'];
    }
  }
}

const getArrayWithActors = (year) => {
  for (let index = 0; index < harryPotterMovies.filmes.length; index += 1) {
    if (year === harryPotterMovies.filmes[index].ano_lancamento) {
      return harryPotterMovies.filmes[index].atores_principais;
    }
  }
}

// console.log(typeof addHarryPotterMovie);
// console.log(addHarryPotterMovie(2011));   // ANO QUE TEVE FILME
// console.log(addHarryPotterMovie(2008));   // ANO QUE NÃO TEVE FILME - ERRO
// console.log(addHarryPotterMovie('xablau'));  // ERRO DE NAN
// console.log(addHarryPotterMovie());          // ERRO DE NAN  

// console.log(getHarryPotterMovie(2010));
// console.log(getHarryPotterMovie(2015));
// console.log(getHarryPotterMovie('xablau'));

// console.log(verifyMovieByYear(2010));
// console.log(verifyMovieByYear(2015));

// console.log(getArrayWithActors(2011));

module.exports = { getHarryPotterMovie, verifyMovieByYear, addHarryPotterMovie, getArrayWithActors }