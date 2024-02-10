const shopCart = ['Máscara Bluetooth', 'teclado mecânico', 'pedômetro', 'copo de smoothie'];

// criar uma função addItem para adicionar novos itens ao carrinho 
// o tipo recebido deve ser string
  // se for diferente de string -> mensagem de tipo inválido no retorno
// pode se adicionar um for para percorrer o array e verificar se o item que sse quer adicionar não está já no array (antes de fazer o push)

const addItem = (newItem) => {
  // SE é para checar o tipo, usa-se o if

  if (typeof newItem !== 'string') {
    return 'O tipo é inválido';
  }
  
  // a variável do for deve ser criada fora dele
  let repeatedItem = false; // bom começar com o false por causa de requisitos como "habilitar o botão só quando for true, ou quando for false, etc". Bom estabelecer qual o modo default
  for (let index = 0; index < shopCart.length; index += 1) {
    if (newItem === shopCart[index]) {
      repeatedItem = true;
    }    
  }

  if (repeatedItem === false) { // se quiser uma mensagem de item repetido é uma boa dentro deste SE. Nesse caso se checaria se a variável é true, ou seja, repetida, daí a mensagem de erro como retorno
    shopCart.push(newItem); // não precisa de return aqui pq o método push altera o array no spot, ou seja, o array original, então não precisa retornar nada, o array já estará alterado. Só se usaria o return se fosse requisito do projeto.    
  }

}

addItem('Luvas') // executa a função e adiciona as luvas ao array

// console.log(addItem(1)); para checar a mensagem de erro é preciso colocar a função, pq o retorno é da função

// esse carrinho de compras é explicado a partir de 1h22 da aula sobre funções da turma 38
