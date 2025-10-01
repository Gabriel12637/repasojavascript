let lista =[]
lista[0] = "manzana"
lista[1] = "pera"
console.log(lista.length)
console .log(lista)

//crear una lista vacia y agregar de manera automatica los numeros pares existen entre 0 y 20
let lista = []
lista[0] = 0
lista[1] = 2
lista[2] = 4
lista[3] = 6
lista[4] = 8
lista[5] = 10
lista[6] = 12
lista[7] = 14
lista[8] = 16
lista[9] = 18
lista[10] = 20

console.log(lista.length)
console.log(lista)
// 
let numberpars  = []
for (let i = 0; i <= 20; i ++) {
    if (i % 2 == 0) {
        numerosPares[numerosPares.length] = i
    }
}
//
let numerosPares = []
for (let i = 0; i <= 20; i ++) 
    if (i % 2 === 0) {
        numerosPares.push(i)
}
console.log(numerosPares) 

//

let amigos = [`j`, `p`, `m`]
amigos.unshift(`c`) 
amigos.push(`a`)
console.log(amigos) 
//

let frutas = [`manzana`, `pera`, `uva`]
let uva=frutas.pop()
uva
frutas

//
let texto=["hola","como","","estas"]
delete texto[2]
texto 

let vocals=[`a`,`e`,`e`,`i`,`o`,`u`]
vocals.splice(2.1)


let amigosprimaria=[`alfredo`,`luis`,`edgar`]
let amigossecundaria=[`edison`,`remy`,`muigel`]
let amigossuperior=[`jpsue`,`marmol`,`hamby`]
let friends=amigosprimaria.concat(amigossecundaria,amigossuperior)
friends


const miFuncion=a=>{}
let Numeros=[1,2,3,4,5,6]
Numeros.forEach(n=>{console.log(n*2)})  


let Number=[1,2,3,4,5,6]
let nuewNumber=number.map(n=>{return n+1})
console.log(nuewNumber)