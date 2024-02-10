// utilizando if-else para identificar triângulos

const angle1 = 50;
const angle2 = 60;
const angle3 = 60;
let message;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
  message = 'Pelo menos um dos ângulos apresentados é inválido.'
} else {
  if (angle1 + angle2 + angle3 === 180) {
    message = 'true'
  } else {
    message = 'false'
  }
}
console.log(message);