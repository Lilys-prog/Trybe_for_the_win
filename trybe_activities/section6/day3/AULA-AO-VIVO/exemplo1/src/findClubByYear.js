const data = require('./data');

// desenvolver-se-á uma função que, dado um ano, devolverá o clube que foi campeão

const findClubByYear = (yearParameter) => {
  for(let index = 0; index < data.clubs.length; index += 1) {
    if (data.clubs[index].years.includes(yearParameter)) {
      return `O campeão mundial no ano de ${yearParameter} foi o ${data.clubs[index].name}`;
    }
  }
  throw new Error(`Não houve campeão mundial no ano de ${yearParameter}`);
}

// try {
//   console.log(findClubByYear(2030));  
// } catch (error) {
//   console.log(error.message);
// }


module.exports = findClubByYear;