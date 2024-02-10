let num1 = 6;
let num2 = 6;
let resultado;

switch (num1 !== undefined && num2 !== undefined) {
  case (num1 > num2):
    resultado = 'num1 é maior que num2';
    break;
  case (num2 > num1):
    resultado = 'num2 é maior que num1';
    break;
  case (num1 === num2):
    resultado = 'Os números são iguais';
    break;  
}
console.log(resultado);