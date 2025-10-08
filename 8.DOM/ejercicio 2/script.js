let titulo = document.querySelector("h1")
let primertitulo = titulo.textContent
titulo.textContent="otro titulo"
let contenido = document.querySelector("#contenido")
contenido.innerHTML=` <p> ${primertitulo} </p>`