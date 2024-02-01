const data = require('./deckCards');


// OS REQUISITOS ABAIXO SÃO UM CRESCENTE EM UMA MESMA FUNÇÃO

// 1 - Adicione em cada carta a propriedade 'game: "Yu Gi Oh"'

// const addProperty = ({ cards }) => {
//   cards.forEach((card) => {
//     card.game = 'Yu Gi Oh';
//   })
  
//   return cards;
// }

// addProperty(data); // a função é chamada, para executar o código
// console.log(data.cards); // só então pode mostrar o resultado
// console.log(addProperty(data)); // com a adição do return na função "mãe", agora existe retorno e o log da função não retorna undefined
// o forEach faz a alteração, não retorna nada, o console.log mostra o que a hof fez, não é retorno
// embora a hof não gere um novo array, pode-se colocar em uma variável e aí se tem uma cópia, um array "novo"
// MAS pode-se colocar um return na função "mãe", como acima

// ======================================================

// 2 - Mostre apenas os objetos do type 2 em um array
// usando a mesma função do item anterior, pode-se adicionar um .filter no retorno da mesma, que é o momento em que se tem o "novo" array
// const addProperty = ({ cards }, id) => {
//   cards.forEach((card) => {
//     card.game = 'Yu Gi Oh';
//   })
  
//   return cards.filter(( { typeId }) => {
//     return typeId === id; // usando um parâmetro id, ao invés de um número fixo, fica dinâmico
//   })
// }
// console.log(addProperty(data, 2));

// ======================================================

/*
3 - apresente este resultado EM UM ARRAY (ou seja, usando map, que retorna um array) no formato:
{
  name:
  typeId:
  game:
}
*/

const addProperty = ({ cards }, id) => {
  cards.forEach((card) => card.game = 'Yu Gi Oh')
  
  // o return abaixo não pode ser retirado, pois o escopo é da função "mãe" e ela tem mais de uma linha, a do forEach e depois este retorno
  return cards.filter(( { typeId }) => 
    typeId === id).map(( { name, typeId, game }) => ({ name, typeId, game })
  );
}

console.log(addProperty(data, 2));

