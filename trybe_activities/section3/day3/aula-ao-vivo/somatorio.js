// criar uma função que receba (parâmetro) um array de inteiros e retorne (return presente) o somatório desses números
// para criar essa função corretamente, deve-se prestar atenção aos escopos

const sumArray = (numbersArray) => {
  let sum = 0; // escopo da função: pode ser usada pelo for e pelo return

  for (let index = 0; index < numbersArray.length; index += 1) {
       sum += numbersArray[index]; // dentro do for pq deve percorrer todo o array dado
  }

  return sum; // pode retornar por estar no escopo da função
}

const array1 = [1, 2, 5];
const array2 = [1, 1, 2, 3];

console.log(sumArray(array1));
console.log(sumArray(array2));

