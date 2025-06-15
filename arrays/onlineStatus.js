
//Mostrar el estado en línea de una lista de usuarios.
//1. Especificar un conjunto de usuarios 
//2.crear la funcion 
//2.1 Evaluar cuantos usuarios estan
//3.Mostrar en la consola 
//

 function onlineStatus(usuarios) {
    let cantidad = usuarios.length; // length para  saber la cantidad de elementos que hay 
    if (cantidad === 0) {
        return "no hay nadie en linea "; ea 
    } else if (cantidad === 1) {
        return `${usuarios[0]} esta en linea`;  
    } else {
        return `${usuarios[0]}, ${usuarios[1]} y ${cantidad - 2} mas estan en linea `; //si 2 mas estan en linea 
    }
}

console.log(onlineStatus(['luis1997', 'mara', 'josue']));