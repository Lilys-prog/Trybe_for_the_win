const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

// Criação da função
const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

// Chamada da função passando os valores dos parâmetros
addProperty(customer, 'birthDay', '19/07/1932');

// Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.
addProperty(customer, 'email', 'lilys@example.com');
addProperty(customer, 'fone', '(99)99999-9999');
addProperty(customer, 'userGithub', 'Lily Silva');
addProperty(customer, 'linkedIn', 'Lily Silva');


// Exibe o objeto transformado
console.log(Object.entries(customer));