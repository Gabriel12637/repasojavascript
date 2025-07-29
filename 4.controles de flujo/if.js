//estructura de una condicion 
//1.palabra reservada 
//2.la condicion o exposicion  e evaluacion (que debera ser siempre debe ser un tipo voleano) , la exprecion o condicion debe estar en una {}
//3.el cuerpo que contendra el codigo a ejecutar en caso la condicion sea verdadera 
//4.palabra reservada else
//5.cuerpo que contendra el codigo e ejecutara en caso la condicion sea falsa 

if (true) {
    let suma=2+6
    let divicion=78/7
    console.log(suma,divicion) 
}else {
    console.log("me ejecuto cuando soy falso")
}
console.log(divicion)
//crear un programa que evalue si un numero es mayor al otro y si este numero es a la vez un numero par
let firtsnumber=25
let secondnumber=30

if (firtsnumber>secondnumber){
    if (firtsnumber%2 == 0){
        console.log("el numero es mayor y par") 
    } else{
        console.log("el numero es mayor pero es impar")
    }

}else{
    console.log("el numero es menor")
}
// tarea 
// crear un programa que me muestre el numero en texto 
function numeroATexto(numero) {
    if (numero == 1) return "uno";
    if (numero == 2) return "dos";
    if (numero == 3) return "tres";
    if (numero == 4) return "cuatro";
    if (numero == 5) return "cinco";
    if (numero == 6) return "seis";
    if (numero == 7) return "siete";
    if (numero == 8) return "ocho";
    if (numero == 9) return "nueve";
    if (numero == 10) return "diez";
    if (numero == 99) return "noveintainueve"
    if (numero == 100) return "sapo"
    return "no sé";
}

// Usar la función
console.log(numeroATexto(5));
console.log(numeroATexto(8));
console.log(numeroATexto(99));
console.log(numeroATexto(100))