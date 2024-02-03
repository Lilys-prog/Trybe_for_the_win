// a HOF reduce reduz o array a um único valor, ou seja, o return dele será de um único valor, originário do array
// pode ser um elemento, ou algo criado através de uma condição, etc
// esse resultado pode ser um número, uma string, um objeto, um array, etc

// apesar do retorno trazer um ÚNICO dado, não significa simplificação. Pode ser UM objeto complexo, cheio de chaves, arrays, outros objetos...
// INCLUSIVE, quando se quer um objeto no retorno, o reduce é a hof to go, pq o mais próximo dessa complexidade é o map, mas ele retorna um array
// INCLUSIVE, mesmo que o retorno deva ser um array, deve-se analisar se ele terá a mesma quantidade de elementos que o array original, pois essa é uma das características do map. Se o array final terá uma quantidade diferente, o reduce se torna novamente a ferramenta certa

// .reduce(callbackFunction(acc, curr), initialValue)

// os parâmetros OBRIGATÓRIOS da função callback serão:
// acc = accumulator
// curr = current value
// callbackFunction = (acc, curr) => { código }

// o initialValue pode ser opcional em alguns cenários, mas é uma boa prática usar, é de onde o reduce vai partir. Em geral está conectado ao tipo de return que se espera: uma string vazia, um array, um objeto, um 0 pra adição, 1 pra multiplicação...

// ao utilizá-lo em um array, SEM DEFINIR VALOR INICIAL, o curr NUNCA será o elemento 0 do mesmo, ele sempre vai partir do array[1] e o acc vai receber o array[0]

// DEFININDO VALOR INICIAL o acc vai recebê-lo e aí sim o curr vai começar no array[0]

// dar uma boooooa lida nessa documentação

