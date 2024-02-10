
// são definidos 3 arrays: o primeiro contém os dias de trabalho, o segundo contém o fds, e o terceiro concatena os dois primeiros
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekendDays = ['Sunday', 'Saturday'];
const weekDays = workDays.concat(weekendDays);

// o primeiro teste verifica se 'Sunday' esstá contido no array de dias da semana
// o segundo teste verifica se os dias de trabalho NÃO contém 'Sunday'
test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});