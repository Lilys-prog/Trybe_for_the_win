// variáveis
// LET e CONST
const mensagem = 'Hello, mundo!';
console.log(mensagem);

// mensagem = 'hi, dude'; // erro: Assignment to constant variable.
// console.log(mensagem);

// ============================================

// tipos de dados - tipagem dinâmica - para descobrir o tipo de dados usa-se o comando "typeof" na frente do dado
// tipos de dados primitivos: undefined, string, number (float ou integer é number), booolean, null (tipo objeto - nõo é primitivo)

// =======================================

// operadores - representados por símbolos
// de atribuição: =

// aritméticos: +, -, *, /, ** (potência), % (MOD - resto da divisão)
let num1 = 3;
let num2 = 10;
let resultado = num2 % num1;
console.log(resultado); 

// de comparação (retorna um boolean): ==, === (usar este), >=, <=, >, <, !==

// operadores lógicos - ligação com os booleans
// && (AND)
// || (OR)
// ! (NOT)    (!==: diferente de)

let idade = 39;
let nome = 'Lily';
console.log(!(nome === 'Lily' && idade < 40));