

//funcion constructor objetos tiupo persona 
function Persona(nombre,apellido,email){
this.nombre =nombre;
this.apellido=apellido;
}



let padre = new Persona('Juan', 'Perez', 'jperez@mail.com')
console.log(padre);