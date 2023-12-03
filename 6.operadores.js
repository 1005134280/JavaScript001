// ejemplo esta dentro de rango

let minRango=0 , maxRango=5;

let dato=7

//revisamos si eta dentro de rango
 let valorRango= dato >= minRango && dato <= maxRango;
console.log(valorRango)

//operadores aritmeticos

let a, b, c, d, e, f;

//suma 
a= 3+4;
console.log(a)

//resta
b=6-2
console.log(b);

//multiplicacion 
c= a*2
console.log(c)


//division
d= b/2.5
console.log(d)
console.log(typeof d)


//modulo
f=9%2
console.log(f)

//potencia 
e=2**3; //2*2*2=8
console.log(e)

//--------------------------------------------------------------------------------------------------------------------------------------------------//
// operadores de incremento 
let g, h, i;
g=0
//pre- incremento
++g;
console.log(g);


// post-incremento
g++;
console.log(g)

//predecremnto
--g;
console.log(g)
//pos-decremento
g--;
console.log(g);

//////ejemolo

g=5
h=2
i= ++g * h--;

console.log(i)// da doce por que el post el valor de h soilo se cabia hasta esta linea
console.log(g)
console.log(h)

//----------------------------------------------------------------------------------------------------------------------------------------------------

//operadores de asignacion

let miNumero =1;
console.log(1)

miNumero=20;
console.log(miNumero)


//operadores de asignacion compuesto
miNumero +=5
console.log(miNumero)

//operador -=

miNumero -=3
console.log(miNumero)

miNumero *=2
console.log(miNumero)

miNumero /=4
console.log(miNumero)

miNumero %=2
console.log(miNumero)
 
//exponente
miNumero=8
miNumero **= 2;
console.log(miNumero)

///.---------------------------------------------------------------------------------------------------------------------------------

//operadores de comparacion --- relacionales
 a=5
 b= '5'

//   == igual a  solo compara valores y hace una comparacion si es necesario
console.log("a==b", a == b)

//  === tipo y dato  iguldad estricta o exacta
console.log("a==b " ,a===b)

//string interpolation es una manera que en un string se pueda imprimir algo  // tiene que terner un comilla de hacento invertido
console.log(`${a} === ${b} -> ${a === b}`)

// != distinto a campara valor y combierte si es necesario

console.log(`${a} != ${b}  ${a !=b}` )

//!== distinto pero exacto valor y tipo de dato
console.log(`${a!==b}`)

// mayor

console.log(a>b)

//---------------------------------------------------------------------------------------------------------------------------------------------
/// operadores logicos

//&& and     ||  or   operaodor unario ! invierte el valor original

//