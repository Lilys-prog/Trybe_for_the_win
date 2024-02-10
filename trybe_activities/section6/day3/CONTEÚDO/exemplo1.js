
// função recebe como parâmetro uma string contendo uma nova skill e a adiciona ao array original
const skills = ['HTML', 'CSS', 'JavaScript'];

const addNewSkill = (newSkill) => {
  skills.push(newSkill);
}

// o teste verifica se houve aumento na quantidade de itens do array e confirma se agora existe a skill fornecida no parâmetro
test('Adiciona Jest na lista de habilidades', () => {  
  const previousLength = skills.length;
  addNewSkill('Jest');
  expect(skills).toContain('Jest');
  expect(skills).toHaveLength(previousLength + 1);
});