// aqui o js não está importando o data. O elo de ligação entre os dois arquivos é o index.html, que tem o link para ambos no fim do <body>

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
    // paramYear precisa ser transformado em número pq todo value que vem de input é string
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
// ^ adiciona a função onload (assim que carrega a página) e coloca a função addHarryPotterMovie ao clicar no botão. Sem os parênteses de parâmetro pra que ela não seja chamada automaticamente, só quando clicar no botão