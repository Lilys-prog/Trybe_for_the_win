const data = require('./deckCards');

/*
Encontrar a carta "Arianna the Labrynth Servant" e adicionar a ela a propriedade:
  feature: ['game', 'monster'],
*/

// const addFeature = ({ cards }, cardName) => {
//   const findCard = cards.find(({ name }) => {
//     return name === cardName;
//   })

//   findCard.feature = ['game', 'monster'];

//   return findCard;
// }
// console.log(addFeature(data, 'Arianna the Labrynth Servant'));


// usando rest

const addFeature = ({ cards }, cardName, ...featureArray) => {
  const findCard = cards.find(({ name }) => {
    return name === cardName;
  })

  findCard.feature = featureArray;

  return findCard;
}

console.log(addFeature(data, 'Arianna the Labrynth Servant', 'game', 'monster', 'etc'));

// ao usar o rest em ...featureArray, a função relaciona os dois primeiros parâmetros com os dois primeiros argumentos e TODOS OS DEMAIS INFORMADOS com o rest. Ou seja, se neste exemplo fossem informados 20 argumentos, a função colocaria os dois primeiros nos lugares de { cards } e cardName, e todos os 18 restantes no array featureArray