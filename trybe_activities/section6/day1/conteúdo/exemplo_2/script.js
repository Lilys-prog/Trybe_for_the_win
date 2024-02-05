// Primeira parte - array de objetos com os detalhes dos produtos
const promo = [
  {product: 'bola de beach tennis', price: 29.99},
  {product: 'mochila de trilha 20 litros', price: 120.99},
  {product: 'capacete de ciclista', price: 180.59},
  {product: 'toalha compacta de secagem', price: 39.99},
  {product: 'kit 5 camisetas Dry Fit', price: 99.99},
  {product: 'caneleiras de peso - 3kg (par)', price: 44.99},
  {product: 'bola de ginástica e pilates', price: 149.59},
  {product: 'óculos de natação', price: 18.99},
  {product: 'capa protetora de prancha de surf', price: 89.59},
  {product: 'bola de basquete', price: 39.99},
];

// captura o botão e adiciona o evento de click com uma função que captura os inputs e aplica a função showPromo
const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

// captura os parágrafos vazios para adicionar o texto da promoção, mas antes executa as funções checkName e checkNumber, transformando a variável "number" no tipo number (já que o input a traz em forma de string, por padrão)
const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
 
  try {
    checkName(name);
    checkNumber(parseInt(number));
    checkValidRange(number);
    const productObject = checkPromo(number);
    // monta os textos dos parágrafos
    firstText.innerHTML = `Boas-vindas, ${name}!`;
    secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
  } 
  catch (error) {
    secondText.innerHTML = error.message;
  }
} 

const checkName = (name) => {
  let letters = /[aA-zZ]+/;    // regEx - regular expression
  
  if (!name.match(letters)) {
    throw new Error('É necessário digitar um nome válido');
  }
}

// Segunda parte
// recebe a variável number e traz como retorno a promoção na posição [index - 1]. Isso porque ao selecionar, por exemplo, a promoção 1, ela será equivalente ao elemento [0] do array, que é seu primeiro. Então o number precisa perder 1 para ser equivalente ao index
                  // const checkNumber = (number) => {
                  //   return promo[number - 1];
                  // }

// Segunda parte
const checkNumber = (number) => {
  if (isNaN(number)) {
    throw new Error('É necessário digitar um número');
  }
}

// Terceira parte
const checkPromo = (number) => {
  for (let index = 0; index < promo.length; index += 1) {
    if (number - 1 === index) {
      return promo[index];
    }
  }
}

// para fixar, exercício 1
// implementar a função checkValidRange, que deve garantir que o number esteja entre 1 e 10
const checkValidRange = (number) => {
  if (number < 1 || number > 10) {
    throw new Error('Escolha um número entre 1 e 10 para a promoção')
  }
};