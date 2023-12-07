
let promesa = new Promise((resolved) =>{

    setTimeout(()=> resolved('saludos con promesas y timeout'),3000);


});

// async indica que una funcion va  aregresar una promesa

async function miFuncionConPromesa(){
return 'saludos con promesa y async';

}

miFuncionConPromesa().then(valor => console.log(valor))