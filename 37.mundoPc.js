class DispositivoEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;

    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    get marca(){
       return this._marca;
    }

    set tipoEntrada(tipoEntrada){

        this._tipoEntrada=tipoEntrada;

    }
    set marca(marca){
        this._marca=marca;
    }

}

class Raton extends DispositivoEntrada{
    static contadorRatones=0

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idRaton= ++Raton.contadorRatones;
        }

    toString(){
        return `id raton ${this._idRaton},tipo Entrada ${this._tipoEntrada}, marca ${this._marca} `
    }
}

class Teclado extends DispositivoEntrada{
    
    static contadorTeclado=0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idTeclado= ++Teclado.contadorTeclado;
    }

    toString() {
        return `Id del teclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca} `;
      };

}

class Monitor{

    static contadorMonitor=0

    constructor(marca,tamanio){

        this._marca=marca
        this._tamanio=tamanio;
        this._idMonitor= ++Monitor.contadorMonitor;
    }

    get tamanio(){
        return this._tamanio;
    }

    get marca(){
       return this._marca;
    }

    set tamanio(tamanio){

        this._tamanio=tamanio;

    }
    set marca(marca){
        this._marca=marca;
    }
    get idMonitor(){
        this._idMonitor=this.idMonitor;
    }
    toString() {
        return `Id del monitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio} `;
      };

}

class Computadora{

    static contadorComputadoras=0;


    constructor(nombre,monitor,teclado,raton){
        this._idComputadora= ++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
    }
    

    toString() {
        return `Id de la compu: ${this._idComputadora}, 
        nombre: ${this._nombre}, monitor: ${this._monitor}, 
        teclado: ${this._teclado}, mouse: ${this._raton} `;
      };

    get idCompuadora(){
        return this._idComputadora;
    }

    get nombre(){
       return this._nombre;
    }

    set nombre(nombre){

        this._nombre=nombre;

    }
  

}

class Orden {

    static contadorOrdenes =0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora){

        this._computadoras.push(computadora);

    }

    mostrarOrdenes(){

        let acumulador = '';
        for (const computadora of this._computadoras) {
           acumulador += '\n { '+computadora.toString() + '}';
        }
       

        console.log(`Orden: ${this._idOrden} , computadoras: ${acumulador} `);
    }
  
}


let raton1 = new Raton('usb','hp');
let teclado1 = new Teclado('usb','lenovo');

let raton2 = new Raton('usb2','hp2');
let teclado2 = new Teclado('usb2','lenovo2');

let monitor1 = new Monitor('samsung2','22.3');
let monitor2 = new Monitor('samsung2','22.3');

let computadora1= new Computadora('torre',monitor1,teclado1,raton1);
let computadora2= new Computadora('laptop',monitor2,teclado2,raton2);

let orden= new Orden();

orden.agregarComputadora(computadora1);
orden.agregarComputadora(computadora2);

//console.log(this._computadoras)

//console.log(orden)
orden.mostrarOrdenes();