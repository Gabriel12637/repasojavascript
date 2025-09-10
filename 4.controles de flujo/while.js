let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Sumar los números del 1 al 10 usando while
let suma = 0;
let num = 1;
while (num <= 10) {
    suma += num;
    num++;
}
console.log("La suma es:", suma);


let frutas = ["manzana", "banana", "pera", "uva"];
let index = 0;
while (index < frutas.length) {
    console.log(frutas[index]);
    index++;
}
// while es usado para repetir un bloque de codigo mientras una condicion sea verdadera
// si la condicion es falsa el bloque de codigo no se ejecuta
// si la condicion nunca llega a ser falsa el bloque de codigo se ejecuta infinitamente