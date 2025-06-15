//matriz de multiplos 
// 1. Crear una función que reciba dos parámetros: numero y longitud 
// 2. Inicializar un array
// 3. Usar un ciclo for para generar los múltiplos del numero base
// 4. Retornar el arreglo completo

function arrayMultiplos(numero, longitud) {
  const resultado = [];

  for (let i = 1; i <= longitud; i++) {
    resultado.push(numero * i);
  }

  return resultado;
}

console.log(arrayMultiplos(2, 10));   // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6));   // [17, 34, 51, 68, 85, 102]