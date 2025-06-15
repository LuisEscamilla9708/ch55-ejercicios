/*
Escriba un programa que pregunte al usuario la cantidad de segundos necesarios hasta que se ejecute una alarma 
(mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
Ejemplo de resultado : "Hora de dormir después de 10 segundos".
*/

const segundos = prompt("Cuantos segundos necesitas hasta que se ejecute una alarma ?");
setTimeout(() => {
  alert("Tiempo terminado");
}, segundos * 1000);

