class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

}

let persona1 = new Persona('juan','perez')
console.log(persona1)

//metodos get y set
console.log(persona1.nombre)
persona1.nombre ='carlos'
console.log(persona1.nombre)