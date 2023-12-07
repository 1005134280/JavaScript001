/* let miPromesa = new Promise((resolved, rejected)=> {

let expresion = false;

if(expresion)

resolved('resolvio correcto');

else 

    rejected ('se produjo un error');


});

*/


//miPromesa.then(    valor => console.log(valor),   error => console.log(error) )

//miPromesa
//.then(    valor => console.log(valor) )
//.catch(error=>console.log(error));

let promesa = new Promise((resolved) =>{

    setTimeout(()=> resolved('saludos con promesas y timeout'),3000);


});

promesa.then( valor => console.log(valor));