// const meuArray = [];
// console.log(meuArray); 
// // []
// console.log(Array.isArray(meuArray)); 
// // true

const names = ['Lily', 'Scott', 'Mike', 'Molly', 'Chandler', 'Carter'];
// console.log(names);
// [ 'Lily', 'Scott', 'Mike', 'Molly', 'Chandler', 'Carter' ]
// Mesmo que se vá usar push ou slice no array, ele pode estar definido como constante
// console.log(names[0]);
// Lily
// console.log(names.length);

// ===================

// Estrutura de repetição FOR - PARA e
// Estrutura de repetição WHILE - DO WHILE


// dentro do parênteses colocam-se três limites para o parâmetro index
// inicialização / parada / incremento ou decremento a cada volta
for (let index = 0; index < names.length; index += 1) {
  console.log(index, names[index]);
}
// 0 Lily
// 1 Scott
// 2 Mike
// 3 Molly
// 4 Chandler
// 5 Carter