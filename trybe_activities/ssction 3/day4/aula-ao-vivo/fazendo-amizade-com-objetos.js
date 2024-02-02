// um objeto pode ser considerado uma coleção de informações. É diferente do array pq ellle permite que se use um par chave-valor em cada elemento. Sempre entre chavess, qualquer variável que receba em ssua atribuição uma chave { } no começo é um objeto. Assim como o array se caracteriza pelloos colchetes [].
// [ ] = array
// { } = objeto

const product = {
  // pares chave-valor ou key-value
  // a chave tb pode ser chamada de atributo ou propriedade
  // só sse usa aspas chaves com nome composto + espaço, como 'nome do produto'. Sem esspaços, não se usa aspas, só camel case, como em nomeDoProduto.
  price: 200,
  wanted: false,
  os: ['windows', 'linux', 'mac'],
  outroObjeto: {             // dentro do objeto-"mãe"
    name: 'nomeExemplo',
    preco: 200,
    maisUm: true
  }    
};

// acessar a chave contida em um objeto:
  // **dot notation: object.key**
  console.log(product.price);  // 200
  console.log(product.os); // ['windows', 'linux', 'mac']

  console.log(product.outroObjeto);   // ATENÇÃO À NOTAÇÃO DO OBJETO RESPOSTA:
  //{ name: 'nomeExemplo', 'preço': 200, maisUm: true }
  // O PREÇO (key) VEIO ENTRE ASPAS PARA DIFERENCIIAR, PQ SEU VALOR É NUMÉRICO

  // **bracket notation: object['key']**
  // obs: se o nome da key for composto e tiver espaços, ou seja, um nome entre aspas - se vc começar a escrever e clicar no nome no autocomplete ele já virá em bracket notation, por padrão. Ou seja:
  // console.log(object['nome da key']);
  // se for escrever o nome da key, sem clicar, deve-se lembrar que o bracket notation obriga as aspas.

  // no caso de uma chave dinâmica, que vai sofrer alterações, é interessante saber que pode-se utillizar uma variável para guardá-la e, neste caso, utilizar a bracket notation para acesssá-la. A dot notation não se aplica nesse tipo de uso.
  const dinamicKey = 'price'; // muda ao longo do código. Pode mudar de preço para nome, depois produto, etc.
  // para acessar: 
  console.log(product[dinamicKey])
  // neste caso ^, sem aspas, pois é uma variável. Muito útil para o acesso em parâmetro de função.