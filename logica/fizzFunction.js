


// firma de la funcion 
const fiizbuzz = (counterNumber) => {
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
}while (counter <= counterNumber); 
};

console.log ("50 veces");
console.log (fiizbuzz(50));
console.log ("200 veces");
fiizbuzz(200); 
