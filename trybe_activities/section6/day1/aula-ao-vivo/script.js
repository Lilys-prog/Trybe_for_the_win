const addHarryPotterMovie = () => {
  try {
    const year = document.querySelector('#movie').value;
    const result = document.querySelector('#result');

    const movie = getHarryPotterMovie(year);

    result.innerText = `No ano ${year} foi lançado o filme ${movie}`;
  } catch (error) {
    result.innerText = error.message;
  } finally {
    document.querySelector('#movie').value = '';
  }
}

const getHarryPotterMovie = (paramYear) => {
  if (isNaN(paramYear)) {
    // console.log('Não é um número');
    throw new Error('Não é um número')
  }

  for (let index = 0; index < harryPotterMovies.filmes.length; index += 1) {
    const objectMovie = harryPotterMovies.filmes[index];
    if (parseInt(paramYear) === objectMovie.ano_lancamento) {
      return objectMovie.nome;
    }
  }

  throw new Error(`Nenhum filme foi lançado neste ano`);
}

window.onload = () => {
  const button = document.querySelector('button');
  button.addEventListener('click', addHarryPotterMovie);
}