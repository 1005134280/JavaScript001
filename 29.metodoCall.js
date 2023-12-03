let persona1= {
    nombre : 'juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ''+this.apellido;
    }
}
let persona2= {
    nombre : 'juan1',
    apellido: 'Perez1'
}


//uso de call para usar 
// el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto());


console.log(persona1.nombreCompleto.call(persona2))

let persona3= {
    nombre : 'juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,telefono){
        return titulo+': '+this.nombre + ' '+this.apellido+', '+telefono;
    }
}
let persona4= {
    nombre : 'juan1',
    apellido: 'Perez1'
}


//uso de call para usar 
// el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto());


console.log(persona3.nombreCompleto.call(persona4,"ing",'541565'))

