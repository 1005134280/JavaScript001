
// agregar metodos a funciones 
let persona = {
    nombre: 'juan',
    apellido:'perez',
    email:'jperez@mail.com',
    edad:20,
    nombreCompleto: function(){

        return this.nombre + ' '+ this.apellido;
    }

}

// concatenar cada valor de cada propiedad

console.log(persona.nombre + ', ')

// for in 
for (const nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona)
console.log(personaArray)

let personaString =JSON.stringify(persona);
console.log(personaString)