let miFuncio =function(){
    console.log('saludos desde mi funcion');
}
// anonima 
// miFuncion();

// fecha

let miFuncionFecha= ()=>{

    console.log('saludos desde mi funcion fecha')
}

miFuncionFecha();


const miFuncionFecha2= () => console.log('saludos desde mi funcion fecha');

miFuncionFecha2();


// funcion simplificada

const saludar= () => 'saludos desde funcion fecha'

//regresar objeto

const regresarObjeto = () => ({nombre: 'juan', apellido: 'lara'})
console.log(regresarObjeto());


const funcioConParametro = (mensaje) => console.log(mensaje);

funcioConParametro('saludar con parametro');