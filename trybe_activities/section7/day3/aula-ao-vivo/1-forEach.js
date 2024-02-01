const data = require('./deckCards');

// mostre os poderes de cada carta no formato:

/*
{
  name:
  atk:
  def:
}
*/

// como se está falando apenas de MOSTRAR os poderes e não RETORNAR (ou montar um array), pode-se usar o forEach ao invés de um map (inclusive, mais recomendado)

// lembrar que ao montar um objeto em hof, é necessário colocar as chaves dentro de um parêntese à parte, ou ele pode ser confundido como escopo

const getMonstersData = ({ cards }) => cards
  .forEach(({ name, atk, def }) => console
    .log({ name, atk, def }));

getMonstersData(data);