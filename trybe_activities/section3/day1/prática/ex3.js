// maior número com 3 variáveis

const num1 = 13;
const num2 = 14;
const num3 = 2;
let message;

if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
  message = 'Pelo menos uma das variáveis é inválida para esta análise!'
} else {
  if (num1 > num2 && num1 > num3) {
    message = `${num1} é o maior número entre os três!`;
  } else if (num2 > num1 && num2 > num3) {
    message = `${num2} é o maior número entre os três!`;
  } else {
    message = `${num3} é o maior número entre os três!`;
  }
}
console.log(message);