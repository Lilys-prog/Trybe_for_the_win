// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// const comparingUp = (a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0
// }

const sortAge = (people) => {
  return people.sort((personA, personB) => personA.age - personB.age);
}


console.log(people);