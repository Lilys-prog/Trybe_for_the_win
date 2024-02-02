const array = [10, 78, 27, 10, 23, 188];

// const sum = (arrayNumbers) => {
//   return arrayNumbers.reduce((acc, number) => {

//     console.log(`acc: ${acc} -------- number: ${number}`);
//     // ^ é possível ver cada iteração
//     return acc + number;
//   }, 0)
// }

// REFATORANDO:

const sum = (arrayNumbers) => arrayNumbers
  .reduce((acc, number) => acc + number, 0);

console.log(sum(array));

// aqui, number representa o parâmetro currentValue