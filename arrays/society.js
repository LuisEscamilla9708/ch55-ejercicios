/*Encuentra el nombre de una sociedad secreta basándose en la primera letra del nombre de cada miembro.
 

Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .

1.Recibimos un array que tiene nombres
 1.1 estos nombres empiezan en mayus
2. inicializar una variable para guardar las iniciales
2. Utilizar un ciclo para recorrer el array 
3. obtener la primera letra de cada nombre utilizando la notacion de corchetes
4. pegar la inicial de cada nombre para 
 n. Retornar el nombre de la sociedad secreta basado en la primera letra de cada nombre 
*/ 


const secretName = function(namesArray){
    let societyName = "";
    const sortedNames = namesArray.toSorted();
    sortedNames.forEach((name) => societyName = societyName + name[0]);
    return societyName;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));