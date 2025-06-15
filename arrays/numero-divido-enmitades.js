// 1. Crear una funcioon que reciba un numero 
// 2. Dividir el numero entre 2
// 3. Retornar un arreglo cque devuelve el numero dividio en sus mitades

function numDiv(numeroOriginal) {
  const mitadDelNumero = numeroOriginal / 2;
  return [mitadDelNumero, mitadDelNumero];
}

// debera devolvolver
console.log(numDiv(10));  
console.log(numDiv(20));  