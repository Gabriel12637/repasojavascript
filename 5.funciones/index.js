// funsion declarada
// Se puede llamar antes de ser definida
saludar();

function saludar() {
  console.log("Hola, soy una función declarada");
}

function promedioNotas(N1,N2,N3,N4){
    let suma=N1+N2+N3+N4
    let promedio=suma/4
    return promedio
}
console.log(promedioNotas(14,16,18,13))



// Función por expresión
const despedirse = function(nombre) {
  return "Adiós " + nombre + "!";
}
console.log(despedirse("Ana")); // "Adiós Ana!"

const saludar = function(nombre) {
  return "Hola " + nombre + "!";
};

console.log(saludar("Carlos")); // "Hola Carlos!"



// Función flecha (arrow function)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let suma = 0;   
for (let num = 1; num <= 10; num++) {
    suma += num;
}
console.log("La suma es:", suma);
