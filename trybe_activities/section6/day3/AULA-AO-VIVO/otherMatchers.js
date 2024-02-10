// aqui alguns matchers usados para testar a base de dados

// não esquecer que o .not é um modificador que pode ser usado em qualquer match

// .toHaveLength
  // verifica o tamanho de arrays ou de strings
  // quando o teste dá errado ele imprime no terminal o array a que ele está se referindo, uma boa forma de confirmar que ele está testando o array certo

// .toContain('item')
  // verifica se um determinado item está contido no array

// .toContainEqual('item')
  // verifica o item e a estrutura (por exemplo, um objeto dentro de um array, um array dentro de um objeto, etc)

// .toHaveProperty(keyPath)
  // verifica se existe certa propriedade em um objeto (mas aí, se ele estiver verificando um array de objetos, dentro de um for, ele vai buscar em todos os objetos do array a mesma propriedade, se algum diferir, o teste vai falhar)

// .toMatch
// pode ser usado para verificação usando regex, se uma string é igual a uma expresssão definida