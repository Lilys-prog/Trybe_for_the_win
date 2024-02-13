window.onload = () => {
  // CAPTURA DOS ELEMENTOS
  const form = document.querySelector('form');
  const weightMarmita = document.querySelector('#size-id');
  // const eggs = document.querySelector('#egg-id');
  const ticket = document.querySelector('.ticket');
  const orderList = document.querySelector('#orderList');

  // CRIA OPTIONS COM TODAS AS MARMITAS DISPONÍVEIS NO OBJETO FOODS
  const getItemsMarmita = (data) => {

  };

  // CAPTURA OS VALORES DOS INPUTS E MOSTRA A NOTA FISCAL.
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const allEaseinputs = document.querySelectorAll('.my-inputs');
    console.log(allEaseinputs);

    const options = ["Nome:", "Endereço", "E-mail:", "Tam. Marmita:", "Qtd Ovos:", "Comentários:"];
    for (let index = 0; index < allEaseinputs.length; index += 1) {
      const element = allEaseinputs[index];
      if (options[index] === "Tam. Marmita:") {
        getOrderList(`${options[index]} ${findMarmita(foods)}`);
      } else {
        getOrderList(`${options[index]} ${element.value}`);
      }
    }
  });

  // EXIBE OS ITEMS DO PEDIDO MAIS O VALOR TOTAL
  const getOrderList = (inputValue) => {
    const newElement = document.createElement('li');
    newElement.innerText = inputValue;
    orderList.appendChild(newElement);
    // findMarmita(foods)
    ticket.style.display = 'block';
  };

  // ENCONTRA A MARMITA DE ACORDO COM A OPÇÃO DO SELECT PARA 
  // DESCOBRIR O PREÇO.
  const findMarmita = (data) => {
    let marmita;
    for (let index = 0; index < data.items.length; index += 1) {
      console.log(weightMarmita.value);
      if (weightMarmita.value === data.items[index].id) {
        marmita = data.items[index].name;
        break;
      }
    }
    console.log(marmita);
    return marmita;
  };

  // CHAMA A FUNÇÃO PARA POPULAR O SELECT COM AS OPÇÕES DE MARMITA
  getItemsMarmita(foods);
};

// JSON
const foods = {
  items: [
    {
      id: 'food-500g',
      name: 'Marmitinha - 500g',
      price: 19.90
    },
    {
      id: 'food-800g',
      name: 'Marmita - 800g',
      price: 23.90
    },
    {
      id: 'food-1kg',
      name: 'Marmitão - 1Kg',
      price: 27.90
    },
    {
      id: 'food-2kg',
      name: 'Marmitãozão - 2Kg',
      price: 39.90
    },
  ]
};