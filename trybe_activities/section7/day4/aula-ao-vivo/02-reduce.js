const data = require('./deckCards');

// faça a soma dos poderes de ataque de todoss os monstros

// ===================================================

// com forEach:

const atkSum = (arrayCards) => {
  let sum = 0;

  arrayCards.forEach(({ atk = 0 }) => {  // atk default = 0
    sum += atk;
  });

  return sum;

}

// console.log(atkSum(data.cards));  // 23400

// ===================================================


// COM REDUCE:

const atkSumReduce = ({ cards }) => cards
  .reduce((acc, { atk = 0 }) =>  acc + atk, 0)
// atk é o curr

// console.log(atkSumReduce(data));


// ===================================================


// COM FILTER E REDUCE:

// filtra-se os objetos que posssuem a chave 'atk' e, como o filter retorna um array, pode-se aplicar o reduce

const atkSumFilterReduce = ({ cards }) => {
  return cards.filter((card) => {
    return card.atk;
  }).reduce((acc, { atk }) => {
    return acc + atk;
  }, 0)
}

console.log(atkSumFilterReduce(data));
