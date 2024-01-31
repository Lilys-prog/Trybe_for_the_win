// Diferentemente do método map, o método sort() altera e retorna o array original
// como o sort utilliza o UNICODE como base, na hora de ordenar números OU strings decrescendo, usa-se uma função comparação para que a ordenação saia corretamente

const fruits = ['banana', 'apple', 'apricot', 'melon', 'orange'];
fruits.sort()
console.log(fruits);
// [ 'apple', 'apricot', 'banana', 'melon', 'orange' ]

// função comparação simples:
array.sort((a, b) => a - b);     // para crescente e alfabética
array.sort(() => b - a);       // para decrescente e inversa

// função comparação padrão:
const comparingUp = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0
}

const comparingDown = (b, a) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0
}

// fruits decrescente
console.log(fruits.sort(comparingDown));


// ao usar sort em um objeto em que se queira a ordenação por strings que apresentam caracteres especiais, o método a ser usado como função comparação fica:
.sort((a, b) => a.title.localCompare(b.title));