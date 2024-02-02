// spread operator
// "espalhar"

const data = require('./deckCards');

// 1 - retorne os 3 primeiros objetos do array cards, em um novo array
// usando a desetruturação de arrays poderia-se pegar os três primeiros, mas eles não viriam em array
// poderia-se retornar os elementos construindo um array, mas com o spread fica:

const firstThree = (card1, card2, card3) => {
 return [card1, card2, card3];
}

console.log(firstThree(...data.cards));
// ao usar o spread no array ^, ele naturalmente coloca, em ordem, seus elementos para ocupar a respectiva posição nos parâmetros. Ou seja, neste caso, ele vai colocar o elemento 0 do array em card1, o elemento 1 no card2 e o elemento 2 no card3. Os três primeiros.


// 2- retorne os objetos do array cards, em um novo array, a partir do quarto objeto

const lastCards = (card1, card2, card3, ...newArray) => {
  return newArray;
 }
 // o ...newArray vai trazer o restante doss elementos e já vai colocá-los dentro de um array
 
 console.log(lastCards(...data.cards));

 // ao receber como um parâmetro, chama-se de "rest" (linha 20); ao ser passado como argumento, chama-se "spread" (linha 25)
 // são, em resumo, o parâmetro rest e o spread operator
 // quando for rest, deve ser o último parâmetro da função
