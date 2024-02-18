// formato do objeto:
// {
//   id: "Id da frase",
//   quote: "Alguma frase inspiradora",
//   author: "Pessoa autora da frase"
// }
// url: https://dummyjson.com/quotes/random

// como o fetch é um método assíncrono, pode-se usar o método .then()
fetch("https://dummyjson.com/quotes/random")
  .then(response => response.json())
  // .json() também é um método assíncrono e, portanto, pode-se aplicar o then novamente
  .then(data => console.log(data))