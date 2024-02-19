const API_URL = 'https://api.github.com/users/';

// esta função não está usando o return implícito, pra que eu possa enxergar, mas pode-se usar
export const getUserData = (userName) => {
  return fetch(`${API_URL}${userName}`)
    // o fetch gera uma promessa pendente, que pode ter sido resolvida ou rejeitada. O método .then() trata essa response, trazendo-a. Ela vem para o then dentro de uma callback. Neste ponto, o response aparece como uma série de dados do objeto Response (com R maiúsculo) e esse objeto vem com dados que ainda não são usáveis pela aplicação, como headers, bady, cors, ou seja, "dados técnicos" da api do servidor. O que se deseja da api neste momento é o seu json. Dessa forma, aplica-sse o método json no response:
    .then((response) => {
      return response.json();
    })
    // no entando, o método json TAMBÉM retorna uma promise, ele também é assíncrono. Aplica-se outro then e desta vez ele vai trazer os dados da api como response:
    .then((data) => {
      return console.log(data);
    });
  // este último bloco de then refere-se a api inicial e nele se pode incluir a lógica que se quer aplicar nos dados, criar elementos de dom, realizar condicionais, etc. Também pode-ses reservar esta função pra cuidar da api e a lógica em outras funções, sendo esta uma função auxiliar, só para tratar da api
};
