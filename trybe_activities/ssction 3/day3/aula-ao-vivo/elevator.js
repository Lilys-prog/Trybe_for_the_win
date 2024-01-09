// funções do elevador: subir e descer, sempre um andar por vez

let floor = 0;
const maxFloor = 3;

// subir um andar
const elevatorUp = () => {
  if (floor < maxFloor) {
    floor += 1;
  }
}

const elevatorDown = () => {
  if (floor > 0) {
    floor -= 1;
  }
}

elevatorUp();
elevatorUp();
elevatorDown();

console.log(floor);