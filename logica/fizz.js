/*
Reto de Programación: FizzBuzz
Descripción:
Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:
Si el número es múltiplo de 3, imprime "Fizz".
Si el número es múltiplo de 5, imprime "Buzz".
Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
Si no es múltiplo de ninguno, imprime el número tal cual

1. 100 numeros
2. crear un bucle que recorre 100 numeros.
3. si el numero es multiplo de 3, imprime "fizz".
   3.1 ocupar la expresion numero % 3
   3.2 es verdadero si el modulo = 0 
4. si el numero es multiplo de 5, imprime "buzz"
  4.1 ocupar la expresion numerp % 5
  4.2 es verdadero si el modulo es = 0 
5. si el numero es multiplo de 3 y 5, imprime "fiizbuzz"
 5.1 ocupar la expresion numero % 3 y modulo % 5
 5.2 es verddero solo y solo ambas expresiones son = 0
6. en caso de no ser multiple de ninguno imprime el numero 
 */

let counter = 1; 
do{
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("FizzBuzz");
    } else if (counter % 3 === 0) {
        console.log("Fizz");
    } else if (counter % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(counter);
    }
    counter++;
}while (counter <= 100); 
