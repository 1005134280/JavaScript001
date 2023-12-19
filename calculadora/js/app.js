console.log('calculadora');

function sumar(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandob=forma['operandoB'];
    let resultado=parseInt(operandoA.value)+parseInt(operandob.value);

    if(isNaN(resultado))
    resultado='la operacion no incluye numeros'

    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}