// boletim escolar
// Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:
    // Escreva uma função que receba, como parâmetro, 4 valores do tipo number. Caso o valor recebido como parâmetro não seja do tipo number, lance uma exceção.
// Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento.

const annualGradeMedia = (grade1, grade2, grade3, grade4) => {

  try {
    checkNumber(grade1, grade2, grade3, grade4)
    return (grade1 + grade2 + grade3 + grade4) / 4;
  } catch (error) {
    return error.message;
  }
}

const checkNumber = (grade1, grade2, grade3, grade4) => {
  if (typeof grade1 !== 'number' || typeof grade2 !== 'number' || typeof grade3 !== 'number' || typeof grade4 !== 'number') {
    throw new Error('Todas as notas devem ser valores numéricos')
  }
}

console.log(annualGradeMedia(1, 5, 10, 8));