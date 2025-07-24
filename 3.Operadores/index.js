// operadires unarios -> negacion
let negacion=!false
// exprecion -> un valor complejo que sera solucionado y retornara un nuevo valor
console.log(negacion)

// operadores binarios
let suma=63+29;
let resta=87-76;
let producto=4*5;
let divicion=3/3;
let potencia=3**2;
let residuo=10%3;
console.log(divicion)

// tarea 
// operadores de comparacion
// Igual a (==)
console.log(5 == "5");  // true (valor igual)
// Estrictamente igual a (===)
console.log(5 === "5"); // false (tipo diferente)
// Diferente de (!=)
console.log(10 != 5);   // true
// Estrictamente diferente de (!==)
console.log(10 !== "10");// true
// Mayor que (>)
console.log(7 > 3);     // true
// Menor que (<)
console.log(3 < 7);     // true
// Mayor o igual que (>=)
console.log(8 >= 8);    // true
// Menor o igual que (<=)
console.log(4 <= 5);    // true

// operadores logicos
let esVerdadero = true;
let esFalso = false;
// AND (&&)
console.log(esVerdadero && esFalso); // false
// OR (||)
console.log(esVerdadero || esFalso); // true
// NOT (!)
console.log(!esVerdadero);           // false

// operadores ternario
//1. el primer valor debe de ser un valor boleano
//2. el segundo valor se mostrara  si el primer valor es verdadero
//3. el tercer valor se mostrara si el primer valor es falso
let edad = 17;

// Condición ? si_verdadero : si_falso
let estado = (edad >= 18) ? "Adulto" : "Menor";
console.log(estado); // Salida: Menor

// let comparacion=5<7
// console.log(comparacion)