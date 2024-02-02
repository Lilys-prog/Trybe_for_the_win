// a HOF reduce reduz o array a um único valor, ou seja, o return dele será de um único valor, originário do array
// pode ser um elemento, ou algo criado através de uma condição, etc
// esse resultado pode ser um número, uma string, um objeto, um array, etc

// .reduce(callbackFunction(acc, curr), initialValue)

// os parâmetros OBRIGATÓRIOS da função callback serão:
// acc = accumulator
// curr = current value
// callbackFunction = (acc, curr) => { código }

// o initialValue pode ser opcional em alguns cenários, mas é uma boa prática usar, é de onde o reduce vai partir. Em geral está conectado ao tipo de return que se espera: uma string vazia, um array, um objeto, um 0 pra adição, 1 pra multiplicação...

// ao utilizá-lo em um array, SEM DEFINIR VALOR INICIAL, o curr NUNCA será o elemento 0 do mesmo, ele sempre vai partir do array[1] e o acc vai receber o array[0]

// DEFININDO VALOR INICIAL o acc vai recebê-lo e aí sim o curr vai começar no array[0]

// dar uma boooooa lida nessa documentação