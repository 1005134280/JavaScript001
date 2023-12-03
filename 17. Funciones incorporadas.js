// Funciones incorporadas

//obtener el largo de una cadena 
let cadena1 = 'hola';
console.log(cadena1.length);

//no podemos modificar una cadena en js
//la cadenas son inmutables
cadena1[0]='x';
console.log(cadena1);

//si podemos asignar una nueva cadena
cadena1='adios'
console.log(cadena1);

//rcorrer cadena caracter
for (let index = 0; index < cadena1.length; index++) {
   console.log(cadena1[index]);
    
}

//subcadenas

let cadena3 = 'hola mundo';
let cadena4 = cadena3.substring(0,4)
console.log(cadena4)

let cadena5 = cadena3.substring(5,10)
console.log(cadena5)