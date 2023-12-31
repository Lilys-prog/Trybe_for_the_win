// if-else trabalhando com valores de salário e códigos mais complexos

let salary = 3000;
let finalSalary;

// if-else para INSS

if (salary <= 1000) {
  const message = 'Salário inválido.';
} else {
  if (salary > 1000 && salary <= 1556.94) {
    salary = salary - 0.02 * salary;
  } else if (salary > 1556.94 && salary <= 2594.92) {
    salary = salary - 0.01 * salary;
  } else if (salary > 2594.93 && salary <= 5189.82) {
    salary = salary - 0.11 * salary;
  } else {
    salary = salary - 570.88;
  }   
}

// if-else para o IR

if (salary <= 1903.98) {
  finalSalary = salary;
} else {
  if (salary >= 1903.99 && salary <= 2826.65) {
    finalSalary = salary - 0.075 * salary + 142.80;
  } else if (salary >= 2826.66 && salary <= 3751.05) {
    finalSalary = salary - 0.15 * salary + 354.80;
  } else if (salary >= 3751.06 && salary <= 4664.68) {
    finalSalary = salary - 0.225 * salary + 636.13;
  } else {
    finalSalary = salary - 0.275 * salary + 869.36
  }
}

console.log(finalSalary);
