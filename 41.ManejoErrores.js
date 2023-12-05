"use strict"

/*try{
   let  x=10;
    throw 'mi error'

}catch(error){
    console.log(error)
}

console.log('continuamos..')

*/
let resultado ='hola';

try {
    if(isNaN(resultado)) throw 'no es un numero'
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}