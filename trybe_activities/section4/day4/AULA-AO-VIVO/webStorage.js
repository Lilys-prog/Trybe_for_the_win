// o local storage se mantém infinitamente ou até que se execute a limpeza
  // guarda as informações em pares chave-valor
  // quando o local storage retornar o dado no get, ele vai retornar em forma de string; deve-se fazer as conversões adequadas para o uso
  // para guardar e recuperar objetos no local storage, usam-se os métodos (também para arrays e números)
  // JSON.stringfy(objeto) - para guardar e 
  // JSON.parse(localStorage.getItem('nome atribuído à CHAVE no local storage')) - para recuperar

// comandos do localStorage

localStorage.setItem();
// guarda a informação

localStorage.getItem();
// recupera a informação

localStorage.clear();
// zera as informações salvas no local storage

// ==================================================



// o session storage é apagado ao fechar o navegador/aba do navegador
  // guarda as informações em pares chave-valor

// o cookie desaparece com a limpeza ou com uma data especificada de expiração
  // guarda as informações em string