const techList = (techArray, name) => {
  if (techArray.length === 0) {
    return 'Vazio!'
  }
  const techObject = [];
  const techArraySorted = techArray.sort();
  for (let index = 0; index < techArray.length; index += 1) {
    techObject.push({
      tech: techArraySorted[index],
      name,
    })
  }
  return techObject;
}

console.log(techList([], 'Lily'));


module.exports = techList;
