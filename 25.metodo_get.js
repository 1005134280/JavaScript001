
// agregar metodos a funciones 
let persona = {
    nombre: 'juan',
    apellido:'perez',
    email:'jperez@mail.com',
    edad:20,
    get nombreCompleto(){

        return this.nombre.toUpperCase();
    },
set nombreCompleto(nombreCompleto){

this.nombre=nombreCompleto.toUpperCase();
}
}
persona.nombreCompleto='pedro'
console.log(persona.nombreCompleto)