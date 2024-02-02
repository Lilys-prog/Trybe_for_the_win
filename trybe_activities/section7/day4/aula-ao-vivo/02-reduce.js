const data = require('./deckCards');

// faça a soma dos poderes de ataque de todoss os monstros

// ===================================================

// com forEach:

// const atkSum = (arrayCards) => {
//   let sum = 0;

//   arrayCards.forEach(({ atk = 0 }) => {  // atk default = 0
//     sum += atk;
//   });

//   return sum;

// }

// console.log(atkSum(data.cards));  // 23400

// ===================================================


// COM REDUCE:

const atkSum = ({ cards }) => cards
  .reduce((acc, { atk = 0 }) =>  acc + atk, 0)
// atk é o curr

console.log(atkSum(data));
