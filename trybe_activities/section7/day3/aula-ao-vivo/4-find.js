const data = require('./deckCards');

// Encontre o objeto que tem a carta do monstro com poder de defesa menor que 2000

const defense2K = ({ cards }, number) => cards
  .find(({ def }) => def < number);


console.log(defense2K(data, 2000));