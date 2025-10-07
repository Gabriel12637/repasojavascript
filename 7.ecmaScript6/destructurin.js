let numeros = [3, 4, 7, 8, 5,4]
let [a, b] = numeros
let [,c,,d] = numeros

let [e, ...resto] = numeros
resto

let alumnos = {
    nombre: "juan",
    edad: 20
}

alumnos["dni"] = 12345678
// spread operator
let actualizarAlumno = {"id":1,...alumnos, "tipo_sangre": "b+"}
actualizarAlumno
let {edad,nombre, tipo_sangre: blood} = actualizarAlumno
blood
nombre
edad

// agregar con el operador spread las letras faltantes de las vocales
let letras = ["a", "e"]
let vocales = [...letras, "i", "o", "u"]

let texto = "hola mundo"
let nuevalista = [...texto]
nuevalista