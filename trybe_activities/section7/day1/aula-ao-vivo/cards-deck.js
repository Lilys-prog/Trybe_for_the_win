const data = require("./deckCards");

// Retornar todos os elementos do array cards no formato:
// {
//   nome: nome do monstro,
//   tipo: ,
//   atributo: ,
//   img:
// }

// função auxiliar para fazer a referência do objeto carta com o tipo
// const cardType = (id) => {
//   for (let object of data.types) {
//     // o 'for...of' já tem o index definido embutido, então o 'object' é como data.types[index]
//     if (id === object.id) {
//       return object.name;
//     }
//   }
// }

// const cardAttribute = (id) => {
//   for (let object of data.attributes) {
//     // o 'for...of' já tem o index definido embutido, então o 'object' é como data.types[index]
//     if (id === object.id) {
//       return object.name;
//     }
//   }
// }

// FUNÇÃO ÚNICA para pegar tipo E atributo:
// coloca-se o array como parâmetro, aí é só usar o array de tipos e depois o de atributos
const typeAndAttribute = (array, id) => {
  for (let object of array) {
    if (id === object.id) {
      return object.name;
    }
  }
}

const resumeInfo = (baseData) => {
  // o 'data' não é array, então se usa o .cards, já que é array e será a referência para pegar as outras informações
  return baseData.cards.map((card) => { 
    return {
        nome: card.name,
        // name e img já fazem parte do .cards, então podem ser inseridos diretamente. Os demais precisa cruzar a referência usando funções auxiliares
        tipo: typeAndAttribute(baseData.types, card.typeId),
        atributo: typeAndAttribute(baseData.attributes, card.attributeId),
        img: card.img
      }
  })
}

console.log(resumeInfo(data));

// SE O EXERCÍCIO FALAR EM OBJECT PROPERTY SHORTHAND, COLOCA-SE OS VALORES DO OBJETO EM VARIÁVEIS, PARA SEREM CHAMADOS ASSIM, COM OS NOMES IGUAIS ÀS SUAS RESPECTIVAS CHAVES. AÍ SSÓ SE ESCREVE AS CHAVES
// { nome: nome, } === { nome }