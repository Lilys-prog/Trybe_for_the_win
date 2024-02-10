// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

// resolução na plataforma:

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;    // o que já está na linha mais um novo asterisco
};

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);    // mostra a linha de asteriscos, n vezes
};