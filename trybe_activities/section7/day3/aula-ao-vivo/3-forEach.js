const data = require('./deckCards');

// Faça a soma dos poderes de ataque de todos os monstros

const sumAtk = ({ cards }) => {
  let sum = 0;
  cards.forEach(( { atk = 0 }) => {  // default destructuring
    sum += atk;
  })

  return sum;
}
console.log(sumAtk(data));

// inicialmente a função tem como resultado NaN, porque alguns objetos não possuem a key 'atk', ele soma com undefined, dando o erro.
// para corrigir isso, usa-se umm valor 'default', o default destructuring
// isso dá o valor padrão de 0 para todos os objetos que não tiverem a key atk (0 neste exemplo, pode ser qualquer coisa como default)