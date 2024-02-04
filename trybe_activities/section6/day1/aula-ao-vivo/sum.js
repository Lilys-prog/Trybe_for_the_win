const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error('Todos os parâmetros precisam ser do tipo número');
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Todos os números devem pertencer ao conjunto dos números reais');
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error('Todos os números devem ser finitos');
  }
  return a + b;
}

const myFunction = () => {
  const n1 = 0 / 0;  // NaN       15 / 0 -> infinity (limite)
  const n2 = 2;
  // const n3 = sum(n1, n2);
  let n3;

  try {
    n3 = sum(n1, n2);
    console.log(`A soma de ${n1} e ${n2} dá: ${n3}`);

  } catch (error) {
    console.error(error.message);
  }
};

myFunction();

// console.log(15 / 0);
// console.log(typeof (15 / 0));