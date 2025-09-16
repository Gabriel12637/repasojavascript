/*
1. crear un programa,haciendo uso de una funcion un cotador de vocales.
la funcion debera recibir un texto y la vocal a buscar y retornar la cantidad
de veces
que se encuentra dicha vocal. hacer uso de los metodos para string 
*/

function contarVocal(texto, vocal) {
    return texto.trim().toLowerCase().split(vocal.toLowerCase()).length - 1;
  }
  
  console.log(contarVocal(" Hola mundo ", "o")); // 2
  


/* 
2. crear un programa que haciendo uso de una funcion pueda recibir una 
lista de amigos y que retorne otra lista pero con los nombres en mayuscula
*/

function convertirAmigosMayus(lista) {
    return lista.join(",").toUpperCase().split(",");
  }
  
  console.log(convertirAmigosMayus(["Ana", "Luis", "Maria", "Pedro"]));
  
  