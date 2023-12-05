

function imprimir(mensaje){
console.log(mensaje)
}

// llama una funcion dentro de otra y le envia el parametro

function suma(op1,ap2, funcionCallback){
    let res=(op1+ap2);
    funcionCallback(res)
}

suma(5,3,imprimir);

//llamadas asincronicas de us setTimeout

function miFuncionCallbak(){
    console.log('saluda asincronico despues de  3 seg')


}

setTimeout(miFuncionCallbak,3000)

// setInterbal
let reloj =()=> {

    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)

}
setInterval(reloj,1000);