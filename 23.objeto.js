
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

console.log(persona.nombreCompleto())

let persona2= new Object();

persona2.nombre = 'carlos';
persona2.apellido ='perez';

// acceder ala valores de objeto



console.log(persona.apellido);
console.log(persona['apellido']);

for (const propiedad in persona) {
  console.log(propiedad)
  console.log(persona[propiedad])
}

//Agregar una nueva propiedad

persona.tel='5544532255';

//eliminar una propiedad

delete persona.tel;