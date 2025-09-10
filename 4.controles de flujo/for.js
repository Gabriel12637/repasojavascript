for ( let i = 1; i <= 5; i++) {
    console.log(i);
}

// Sumar los números del 1 al 10 usando for
let suma = 0;   
for (let num = 1; num <= 10; num++) {
    suma += num;
}
console.log("La suma es:", suma);
/*
sintaxys de for 
primero el keyword, condicion, cuerpo
partes de la condicion- expresion inicial,condicion ,exprecion final
*/
// SUMA NORMAL
// inicial=inicial+1
// imcremento -> inicial++
// otra manera -> inicial+=1
for (let inicial=0;inicial<=10;inicial=inicial+1){
    console.log("hola chikita")

}
//for es usado para acceder o recorrer(iterar) los elementos de una lista o diccionario
let amigos=["alex","ruth","jose ma","willian"]
console.log(amigos)
console.log(amigos[3])
//existe un metodo para saber la cantidad de elementos que tiene una lista length
console.log(amigos.length)
//para acceder al ultimo elemento podemos hacer uso del metodo length y restarle 1 
console.log(amigos[amigos.length-1])
// ejercisio recorrer o iterar la lista de amigos con for

console.log(amigos[0])
console.log(amigos[1])
console.log(amigos[2])
console.log(amigos[3])

for (let i=0; i<amigos.length;i++) {
    console.log(amigos[i])
}


let frutas=["manzan","piña","sandia","pera","banana","cereza"]

for (let i=frutas.length-3;i<frutas.length;i++){
    console.log(frutas[i])
}

for (let i=0;i<frutas.length;i++){
    if ( i===0|| i===3|| i===5){
        console.log(frutas[i])

    }
}