

//funcion constructor objetos tiupo persona 
function Persona(nombre,apellido,email){
    this.nombre =nombre;
    this.apellido=apellido;
    }
    
    
    
    let padre = new Persona('Juan', 'Perez', 'jperez@mail.com')
    padre.tel='32585'
    console.log(padre.tel);

    let madre = new Persona('Juan', 'Perez', 'jperez@mail.com')  
    console.log(madre.tel);

// crear para todos los objetos tipo persona 

Persona.prototype.dire='cer'
console.log(madre.dire);
console.log(padre.dire)
