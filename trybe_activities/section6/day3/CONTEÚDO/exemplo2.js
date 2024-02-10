
// a função cria um endereço de email usando os parâmetros nome e sobrenome do usuário, e gera uma senha aleatória, colocando os dois em um objeto
const createUser = (firstName, lastName) => {
  const user = {
    email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
    password: Math.floor(Math.random() * 100000000),
  };
  return user;
}

// o primeiro teste verifica se existe a key 'email' no objeto criado e se o seu valor está de acordo com o parâmetro passado.
// o segundo teste verifica se existe a key 'password' no objeto criado
test('Cria email e senha', () => {
  const user = createUser('Mona', 'Lisa');
  expect(user).toHaveProperty('email', 'mona_lisa@example.com');
  expect(user).toHaveProperty('password');
});

// console.log(createUser('Lily', 'Silva'));