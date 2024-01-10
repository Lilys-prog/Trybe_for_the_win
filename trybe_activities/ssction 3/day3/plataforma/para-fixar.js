// PARA FIXAR - 1

// Considere a variável balance, que representa a quantia em conta da pessoa cliente do TrybeBank e escreva quatro funções que:

const balance = 3000; // em reais
const fee = 0.1; // em taxa percentual de 10%

const addFeeValue = () => {
  return `A soma do valor em conta com a taxa é igual a ${balance + balance * fee}`
}

console.log(addFeeValue());

// =====================================

const subtractFeeValue = () => {
  return `A subtração da taxa no valor em conta é igual a ${balance - balance * fee}`
}

console.log(subtractFeeValue());

// =====================================

const calcFeeValue = () => {
  return `O valor da taxa em relação ao que consta em conta é de ${balance * fee}`
}

console.log(calcFeeValue());

// =====================================

const splitValue = 3;
const splitBalanceValue = () => {
  return `O valor da divisão do que consta em conta, por 3, é de ${balance / splitValue}`
}

console.log(splitBalanceValue());



// =====================================
// =====================================
// =====================================
// =====================================
// =====================================
// =====================================

// PARA FIXAR - PARTE 2

// 1 - Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”.

// const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

const addCustomer = (customersArray, newCustomer) => {
  if (typeof newCustomer !== 'string') {
    return 'O parâmetro passado deve ser do tipo string'
  } else {
    customersArray.push(newCustomer);
  }
}

console.log(addCustomer(trybeBankCustomers, 1));
addCustomer(trybeBankCustomers, 'Lily');
console.log(trybeBankCustomers);

// =====================================

// Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
// Essa função deve receber dois parâmetros: o array trybeBankCustomers e um novo array de pessoas que devem ser adicionadas.
// Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso algum elemento contido no segundo parâmetro não seja do tipo string, retorne a mensagem: “Todos os valores precisam ser strings.”.

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

  const addCustomerArray = (customersArray, newCostumers) => {
    for (let index = 0; index < newCostumers.length; index += 1) {      
      if (typeof newCostumers[index] !== 'string') {
        return 'Todos os valores precisam ser strings.';
      }      
    }
    customersArray = customersArray.concat(newCostumers);
    console.log(customersArray);
  }

  const newArrayCustomers = ['Lily', 'Pennie', 'Millie', 'Kira'];
  console.log(addCustomerArray(trybeBankCustomers, newArrayCustomers));

// =====================================


