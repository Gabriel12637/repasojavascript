let datosAlumno = {
    nombre: "luis",
    apellido: "gomes",
}
// agregar edad y sexo
datosAlumno.edad = 20
datosAlumno.sexo = "Masculino"
// actualizar el apellido
datosAlumno.apellido = "Perez"
// eliminar sexo
delete datosAlumno.sexo
console.log(datosAlumno);


let alumnos=[
    {nombre:"juana", "edad":20,"cui" :123456},
    {nombre:"ana", "edad":22,"cui" :654321},
    {nombre:"loca", "edad":19,"cui" :789456},
]
// deseo mostrar una lista de solo los menores de 21 años
let menores21 = alumnos.filter(alumno => alumno.edad < 21);
console.log(menores21);
// actualizr la lista de objetos y agregarle el genero famenino a todos

let listaactualizada = alumnos.map(alumno => {
// el ={nombre:"juana", "edad":20,"cui" :123456},"genero":"femenino"}
    alumno.genero = "femenino"
    return alumno
});
console.log(listaactualizada);

// de mi lista deseo mostrar a la persona que tenga como cui 789456
let cui789456 = alumnos.find(alumno => alumno.cui === 789456);
console.log(cui789456);


