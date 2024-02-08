// removeItem.js

const removeItem = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
console.log(removeItem([1, 2, 3, 4], 3));

module.exports = removeItem;

// A função removeItem(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array.
// caso o elemento não exista no array, a função retorna o array original
