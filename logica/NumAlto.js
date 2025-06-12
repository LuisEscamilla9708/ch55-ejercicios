/*
Escribe un programa que pida 10 números. Utilizando operadores lógicos y 
cualquier otra función o estructura de JavaScript que hayas visto, determina 
y genera el mayor de esos números.


1.- pedir al usuario los 10 numeros
2.- guardar los numeros en una variable
3.- calcular con una funcion  estrcutura de control cual es el mayor 
*/

const counter = 0;
const numbers = [];

alert("Vamos a pedirte 10 numeros");

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt(`Ingresa el numero ${i}:`));
   numbers.push(num); 
}
// calculamos cual es el numero mayor de los que acabamos de ingresar 
let mayor = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > mayor) {
    mayor = numbers[i];
  }
}
console.log(`El numero mayor es: ${mayor}`);
