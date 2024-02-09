const hydrate = (beverageString) => {
  const splitBeverageString = beverageString.split('');
  let beveragesNumber = [];
  let beveragesSum = 0;
  
  for(let index = 0; index < splitBeverageString.length; index += 1) {
    if (!isNaN(splitBeverageString[index]) && splitBeverageString[index] !== ' ') {
      beveragesNumber.push(parseInt(splitBeverageString[index]));
    }
  }

  for(let index = 0; index < beveragesNumber.length; index += 1) {
    beveragesSum = beveragesSum + beveragesNumber[index];
  }

  if (beveragesSum === 1) {
    return `${beveragesSum} copo de água`;    
  } else {
    return `${beveragesSum} copos de água`;    

  }
}

hydrate('1 Lily 2 Silva 34')

module.exports = hydrate;

// A função hydrate recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca. Exemplo de saída: