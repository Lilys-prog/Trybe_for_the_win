// estruturas condicionais e ternário

let grade = 55;
let message;

if (grade > 80 && grade <= 100) {
  message = 'Parabéns, você faz parte do grupo de pessoas aprovadas!';
} else if (grade < 80 && grade >= 60) {
  message = 'Você está na nossa lista de espera.';
} else {
  message = 'Infelizmente, você reprovou.';
}
console.log(message);