// Jogo do Lucas
const lucasGame = [13, 17, 19, 29, 59, 47];
const elizaGame = [33, 15, 21, 47, 50, 12];
const marcoGame = [4, 7, 14, 17, 44, 52];

// Jogo sorteado
let megaSenaNumbers = [];
for (let index = 0; index < 6; index += 1) {
  let number = Math.floor(Math.random() * 60) + 1;
  if (megaSenaNumbers.includes(number)) {
    index -= 1;
  } else {
    megaSenaNumbers.push(number);
  }
}

// Conferindo o jogo
let resultado;
let hits;

const megaSenaChecker = (studentGame, megaSena) => {
  resultado = 0;
  hits = [];

  for (let index = 0; index < studentGame.length; index += 1) {
    let lucasNumber = studentGame[index];

    for (let indexMegaSena = 0; indexMegaSena < megaSena.length; indexMegaSena += 1) {
      let drawnNumber = megaSena[indexMegaSena];

      if (lucasNumber === drawnNumber) {
        hits.push(drawnNumber);
        resultado += 1;
      }
    }
  }
  return resultado;
}

console.log('Jogo sorteado:', megaSenaNumbers);
console.log('---------');
console.log('Jogo do Lucas:', lucasGame);
console.log('Número de acertos:', megaSenaChecker(lucasGame, megaSenaNumbers));
console.log('Acertos:', hits);
console.log('---------');
console.log('Jogo da Eliza:', elizaGame);
console.log('Número de acertos:', megaSenaChecker(elizaGame, megaSenaNumbers));
console.log('Acertos:', hits);
console.log('---------');
console.log('Jogo do Marco:', marcoGame);
console.log('Número de acertos:', megaSenaChecker(marcoGame, megaSenaNumbers));
console.log('Acertos:', hits);