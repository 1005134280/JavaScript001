let persona1= {
    nombre : 'juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,telefono){
        return titulo+': '+this.nombre + ' '+this.apellido+', '+telefono;
    }
}
let persona2= {
    nombre : 'juan1',
    apellido: 'Perez1'
}


//uso de apply para usar 
// el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('doc','365562'));

// se pasa todos los valores por medio de un arreglo
let arreglo=['ing','1356554'];
console.log(persona1.nombreCompleto.apply(persona2,arreglo))
