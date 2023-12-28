// usando switch-case

// Peão - uma casa ou duas para a frente
// torre - horizontal ou vertical
// bispo - diagonal
// cavalo - em L
// rainha - qualquer direção
// rei - uma casa, em qualquer direção

let piece = 'RAINHA';


switch (piece.toLowerCase()) {
  case ('peão'):
    console.log('Esta peça pode se mover para a frente, uma casa por vez.');
    break;

  case ('torre'):
    console.log('Esta peça pode se mover horizontal ou verticalmente, quantas casas quiser, desde que não passe por cima de outra.');
    break;

  case ('bispo'):
    console.log('Esta peça pode se mover na diagonal, quantas casas quiser, desde que não passe por cima de outra.');
    break;

  case ('cavalo'):
    console.log('Esta peça se move em forma de L e é a única que pode passar por cima de outra peça.');
    break;

  case ('rainha'):
    console.log('Esta peça pode se mover em qualquer direção, quantas casas quiser, desde que não passe por cima de outra.');
    break;

  case ('rei'):
    console.log('Esta peça pode se mover em qualquer direção, uma casa por vez.');
    break;

  default:
    console.log('A peça informada não pertence ao jogo de xadrez. ');
    break;
}