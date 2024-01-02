const meuArray = [];
console.log(meuArray); 
// []
console.log(Array.isArray(meuArray)); 
// true

const names = ['Lily', 'Scott', 'Mike', 'Molly', 'Chandler', 'Carter'];
console.log(names);
// [ 'Lily', 'Scott', 'Mike', 'Molly', 'Chandler', 'Carter' ]
// Mesmo que se vá usar push ou slice no array, ele pode estar definido como constante

console.log(names[0]);
// Lily

console.log(names.length);