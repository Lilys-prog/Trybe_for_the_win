const data = require('./deckCards');

// retorne em um array todas as cartas que possuem o atributo 'Dark'

// const darkArray = ( { cards, attributes }, attribute) => {
//   return attributes.find(({ name }) => {
//     return name === attribute;
//   }).id; // o return do find é um objeto, por dot notation, se pega somente a key id

//   return cards.filter(({ attributeId }) => {
//     return attributeId === 2;
//   })
// }

// em uma só tacada: 
const darkArray = ({ cards, attributes }, attribute) => {
  return cards.filter(({ attributeId }) => {
    return attributeId === attributes.find(({ name }) => {
      return name === attribute;
    }).id;;
  })
}
// o find é inserido dentro do filter, para trazer o ID e já jogar como condição do filter, onde attributeId vai ser igual ao resultado do find - linha 18

// olhar os problemas de forma independente e depois fazer a fusão das hofs

// não refatorei, pra poder enxergar os returns, mas cabe tudo numa linha só

console.log(darkArray(data, 'Dark'));