// a map retorna um NOVO array (o retorno do map SEMPRE será um array, que terá o mesmo número de elementos do array original)
// dizer que ele retorna um novo array quer dizer que o original não é mexido, o map não está alterando os valores do array original. É como se ele fizesse uma cópia e alterasse essa cópia.
// sintaxe:
// array.map(callback(valorAtual, index, arrayDeOrigem));
// em geral só se usa o valorAtual (chama-se de 'element', por exemplo), que vem a ser cada elemento do array. É como um FOR "embutido".

const array = [1, 2, 3, 4, 5];

const arrayMap = array.map((number) => number * 4);

console.log(arrayMap);