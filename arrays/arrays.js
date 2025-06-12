/** 
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

 1.- un array de resistencias
 2.- usando math.abs obtener el valor absoluito de los elemtnso del array
    2.1 
 3.- reduce, usar ciclos para hacer la suma 
 5.- retornar un mensaje tipo  " 15 ohms "
*
*/
 function sum0FResistores (resistoresArray){
    const resistorsAbs = resistoresArray.map((resistor)  => Math.abs (resistor) ); 
    const totalResustance = resistorsAbs.reduce ((total,current))  => total + current,0); 
    return `${totalResistence} ohms`
 }

 console.log (sum0FResistores([1,2,6,3,9]));
 console.log (sum0FResistores([1,5,6,3]));
 console.log (sum0FResistores([14,3.5,6]));
 console.log (sum0FResistores([8,15,100]));
