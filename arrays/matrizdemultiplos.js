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
//imprimira los resultados 
console.log(arrayMultiplos(2, 10));   
console.log(arrayMultiplos(17, 6));   
