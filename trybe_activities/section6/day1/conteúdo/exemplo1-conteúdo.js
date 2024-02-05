// esta função realiza a soma de números, mas não prevê o caso em que uma pessoa não fornece dois números, ou usa tipos diferentes
            // const sum = (value1, value2) => {
            //   return value1 + value2;
            // };

// =================================================================

// esta função retorna uma mensagem de erro para o caso de tipos que não sejam number, MAS a aplicação não vai identificar que isso é um erro, ela só vai seguir o fluxo da função
// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser numéricos';
//   }
//   return value1 + value2;
// };

// console.log(sum(2, 3));

// =================================================================

// esta função lança o erro, mas não o trata. O resultado é que, ao acontecer o erro, a aplicação entra no if e o throw pára a sua execução, somente.
// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3'));

// =================================================================

const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma, caso os parâmetros sejam números
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada por meio da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3'));