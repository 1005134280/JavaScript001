class Persona{
static contadorPersona=0;
constructor (nombre,apellido,edad){
    this._nombre=nombre;
    this._apellido=apellido;
    this._edad=edad;
    this._idPersona= ++Persona.contadorPersona;

}

get idpersona(){
    return this._idPersona;
}
get nombre(){
   return this._nombre;
}
set nombre(nombre){
    this._nombre=nombre;
}
get apellido(){
    return this._apellido;
}
set apellido(apellido){
     this._apellido=apellido;
}
get edad(){
    return this._edad;
}
set edad(edad){
    this._edad=edad;
}
toString(){
    return nombre+' '+this.apellido+' '+edad+' '+this.idpersona;
}
}

class Empleado extends Persona{
 static idEmpleado=0;

constructor(nombre,apellido,edad,sueldo){
    super(nombre,apellido,edad);
    this._sueldo=sueldo;
    this._idEmpleado= ++Empleado.idEmpleado;
    
    }

    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
    return this.idEmpleado + ' ' + this.sueldo;
    }    

}

class Cliente extends Persona{

    static idCliente=0;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad)
        this._fechaRegistro=fechaRegistro;
        this._idCliente= ++Cliente.idCliente;
   
    }

    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro;
    }
    toString(){
        return this._idCliente +' '+ this.fechaRegistro;
    }

  
}

let persona= new Persona('anita','perez',26);
console.log(persona)

let empleado = new Empleado('pedro','escamoso',52,125522);
console.log(empleado)

console.log(Persona.contadorPersona)
let cliente = new Cliente('kia','mlks',22,new Date)

console.log(Persona.contadorPersona)
console.log(cliente)