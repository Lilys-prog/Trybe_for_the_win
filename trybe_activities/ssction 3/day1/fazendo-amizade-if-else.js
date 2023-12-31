// Estrutura Condicional = condições
// Geralmente quando fazemos a pergunta: SE... alguma coisa
// IF - SE
// ELSE - SENÂO

let num1 = 13;
let num2 = 8;

// Se o que estiver dentro dos parênteses for verdade, será executado o que está dentro das chaves { }
// um número pode ser comparado com null, mas não com undefined
if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
  console.log('Valores inválidos');
} else {
    if (num1 > num2) {    // dentro das chaves fica o escopo do IF
      console.log('num1 é maior');
    } else if (num2 > num1) {
      console.log('num2 é maior');
    } else {
      console.log('Os números são iguais');
    }
}

// OU usar o IF ternário:

// num1 = 12;
// num2 = 13;
// let resultado = num1 > num2 ? 'num1 é maior' : 'num2 é maior';
// console.log(resultado);