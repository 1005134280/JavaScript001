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

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido=apellido;
    }

    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }
    toSreing(){
this.nombreCompleto();
    }


}


class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido)

        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){

    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+ ' '+this._departamento;
    }
}

let persona = new Persona('maria','jimenes','sistemas');
console.log(persona);
console.log(persona.nombreCompleto());

let empleado1 = new Empleado('maria','jimenes','sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
