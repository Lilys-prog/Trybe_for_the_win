// o local storage se mantém infinitamente ou até que se execute a limpeza
  // guarda as informações em pares chave-valor (objeto de armazenamento)
  // quando o local storage retornar o dado no get, ele vai retornar em forma de string; deve-se fazer as conversões adequadas para o uso

// ao criar um item no local storage, usa-se (e pode colocar numa variável):
// const object = localStorage.setItem('chave', valor)

  // para guardar e recuperar objetos no local storage, usam-se os métodos (também para arrays e números):
  // localStorage.setItem('chave', JSON.stringify(object)) - para guardar e 
  // JSON.parse(localStorage.getItem('nome atribuído à CHAVE no local storage')) - para recuperar

  // no caso de números pode-se usar o parseInt só na hora de recuperar o item, mas o método JSON.parse também funciona, pois o JSON.parse RECUPERA O TIPO ESPECIFICADO NA ORIGEM

  // -----

// alguns comandos do localStorage:

localStorage.setItem('chave', valor);
// guarda a informação

localStorage.getItem('chave');
// recupera a informação

localStorage.removeItem('chave')
// remove item especificado

localStorage.clear();
// zera as informações salvas no local storage


// -----


// o session storage é apagado ao fechar o navegador/aba do navegador
  // guarda as informações em pares chave-valor

// o cookie desaparece com a limpeza ou com uma data especificada de expiração
  // guarda as informações em string
  // são úteis quando se quer salvar os dados no navegador E no servidor, pois o cookie envia para lá