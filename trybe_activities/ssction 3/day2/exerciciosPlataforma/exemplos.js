const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];

// push()
shoppingList.push('Cotonetes');

// unshift()
shoppingList.unshift('Água de Coco');

// pop()
shoppingList.pop();

// shift()
shoppingList.shift();

console.log(shoppingList);

console.log(shoppingList.length);

// ==============================================================

// exemplo de for
const laps = 68;

for (let index = 1; index <= laps; index += 1) {
  console.log(`Volta ${index} completada!`);
}

console.log('Acabou a corrida!');

// ==============================================================

// exemplo de for

// Array de números
const numbers = [2, 19, 23, 4, 8, 10];

// Variável complementar que irá acumular os valores da somados
let sum = 0;

// Loop for, que irá iterar da posição 0 até o último elemento do array
// A variável sum sempre irá receber o valor atual dela + o número do array
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

console.log(sum);

// ==============================================================

const cars = ['Saab', 'Volvo', 'BMW', 'Chevrolet'];

for (let index = 0; index < cars.length; index += 1) {
  const currentCar = cars[index];
  console.log(currentCar);
};

// ==============================================================

