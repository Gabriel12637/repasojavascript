# TALLER DE REPASO DE JAVA SCRIPT
> [!WARNING] 
> Observacion: Quokka se debe ejecutar en cada archivo.

> [!TIP] 
> Quokka detecta que en nuestro proyecto tenermos nodejs y lo ejecuta para poder ver la consola en vivo.
## 1. TIPO DE DATOS
Es la manera de como podemos capturar la informacion.
Tenemos 2 clasificaciones:
> [!TIP] 
> JavaScript tiene funciones predetermindas por ejemplo para mostrar un mensaje por consola `console.log()`, para saber que tipo de dato estamos manejando en JS tambien tenemos una funcion por defecto llamada `typeof()`.
### Primitivos
Son datos que siempre existen.
1. `Numericos:`
   - enteros positivos
   - enteros negativos
   - decimal positivo
   - NaN (Not a Number)
   - **decimal negativo** (son losnumeros que mas bit ocupan en la memoria por el simbolo menos y el punto)
2. `Texto:`
   - **caracteres** (un caracter puede ser una linea de 8 bits, y en el codigo ascci depende de lasuma de 1 --> 10001001 - 97 - A)
   - **caracteres especiales** (tiene 16 bits --> 10001001 10001001- 256 - →)
   - **string** (texto largo - parrafo)
3. `Booleanos:`
   - true - 1
   - false - 0
### Estructurados
1. `Array (lista)`
   - array de tipo numerico
   - array de tipo string
   - array de tipo mixto
  Como alta estructura un array en javascript
  ![alt text](image.png)
2. `Objetos (diccionario)`
   - Son similares a las listas con las unica diferencia que en vez de tener **valor e indice** sus elementos trabajan con **clave y valor**
  Como esta estructurado un objeto en javascript
  ![alt text](image-1.png)
## 2. VARIABLES - Constantes (enlaces, binding)
Es la tecnica que se usa para apuntar a una direccion en memoria y al valor o dato relacionado o que se encentre almacenado en ese momento. Una variable puede cambiar de espacios de memoria.
Las `contanste` son fieles, solo tienen y se quedan con un solo espacio de memoria.

Tenemos dos pasos para crear una variable/constante
> [!WARNING] 
> **Observacion:** para crear una variable primero tenemos que crear el enlace luego darle al nombre de la ariable/constante: para las **variables:** tenemos las palabras reservadas `keywoard` - `let` - `var`, para las **constantes:** tenemos la palabra reservada `keyword` - `const`.

**Recomendacion**
- `let:` Usar cuándo el valor tendrá que variar.
- `var:` Evitar usar
- `const` Usar cuándo el valor será el mismo siempre.
  let y`var` ambos nos permite crear variables su única diferecia es el alcance, ámbito o **scope**.
## 3. OPERADORES
Su clasificacion general se divide en tres:
1. `Operadores unarios:` los operadores unarios son aquellos que tienen el opeador a la izquierda del valor (tipo de dato) y que retornan un nuevo valor.
   - operador de negacion
2. `Operadores binarios:` los operadores binarios son aquellos que estan en medio de dos valores y que retornan un unico valor.
   - operadores aritmeticos
   - operadores de comparacion
   - operadores logicos
3. `Operadores ternarios:` los operadores terciarios son aquellos que evaluan y retornan un solo valor.
   - operador condicional: se usan cuando tenermos la estructura if, se obtienen valores true o false.
> [!TIP] 
> EXPRECION: es un valor complejo que sera solucionado y nos retornara un nuevo resultado o valor. Todos los operadores son EXPRECIONES
## 4. CONTROLES DE FLUJO
Nuestros programas en JS contienen mas de una sentencia y las sentencias son ejecutadas una a una como si fuera una historia, de arriba hacia abajo. 
1. `control de decision (if-else):` JavaScript nos permite permite crear caminos alternativos en nuestro programa, dependiendo de una desiciona esto se le conoce como caminos o ejecucioncondiciconal, que ejecutara una sentencia u otra teniendo en cuenta la condicion asi podemos crear multiples caminos u opciones en nuestro programa.
Si tenemos una condicion verdadera se ejecutara una sentencia, si tenemos una condicion false se ejecutara otra sentencia totalmente distinta.
> [!WARNING] 
> OBSERVACION: la ejecucion condicional rompe el flujo normal de un programa.
1. `Bucles (for):` **(para)** Realiza un bucle una determinada cantidad de veces. Es un bucle controlado por un contador, que lo tiene implicado en su sintaxis.
Se compone de 3 partes:
- **Iniciación  de la variable:**  se utilizará en la condición, y solo se ejecuta una vez al principio del ciclo.
- **Condición de fin del ciclo:** la expresión se evalúa al inicio de una interacción.
- **Modificación de la variable:** se ejecuta al final de cada interacción.
1. `Bucles (while):` **(mientras)** Permite que un bloque de codigo se repite una cantidada de veces "mientras" se cumpla una derminada condicion.
- La condicion se evalua siempre al **inicio del ciclo/bucle**.
- Si la condicion es valida, **ingresa bucle** y **ejecuta el codigo**
- Cuando la condicion no se cumple mas lo que pasa con el bucle es que automaticamente se corta, no se repite mas y termina la ejecucion del programa a menos que haya otra condicion despues.
> [!TIP] 
> SENTENCIAS: es una linea de codigo que hace una sola cosa. Para diferenciar una sentencia al terminar una linea de codigo se termina con un ";".La sentencia esta conformada por valores, variables, funciones, etc.
## 5. FUNCIONES
La funcion en javascript son bloques de codigo que se ejecutan de manera independiente, podemos decir tambien que son `mini programas` que toman datos comso entrada y retornan otros datos como salida.
Las funciones son fundamentales para el ordenamiento del codigo,ademas nos permite separar de una manera las ordenadanuestra logica y evitar repetir el codigo muchas veces.
Existen 3 tipos de funciones:
#### 1. Funciones de declaracion
Este tipo defunciones la mas conocida y la mas usada, su estructura es la siguiente:
![alt text](image-3.png)
> [!TIP] 
> las funciones siempre deben recibir dato de entrada y de salida. Solo retorna un dato que es la respuesta

#### 2. Funciones por expresión
`Una función que se almacena en una variable, permitiendo su ejecución posterioR.` Una funcion creada en su forma de expresion solo puede ser ejecutada despues de que la ejecucion haya llegado a la declaracion de esa variable. Antes de la ejecucion llegue ahi, dicha funcion no existira.


#### 3. Funciones flecha (arrow fuction)
Las Funciones Flechas son una forma corta de escribir funciones que aparece en JavaScript a partir de ECMAScript 6. Básicamente, se trata eliminar la palabra function y añadir => antes de abrir las llaves.

Esta forma se utiliza cuando las funciones estan puestas en su modo de expresion `let func =(arg1, arg2, ...argN) => expression`. Se llaman asi por que utiliza una flecha para indicarlas y es lomismo que escribir esto:`let func = function(arg1, arg2, ...argN) {return expression;};`
> [!TIP] 
> `=>`  : en base a la entrada devuelve esta salida

## 6. Metodos para trabajar con datos estructurados
Se utilizan para manipular y operar sobre colecciones de datos, como arrays, listas, mapas, etc. Estos métodos, a menudo llamados métodos de clase, son bloques de código que encapsulan la lógica para procesar esos datos. Permiten realizar acciones como agregar, eliminar, buscar, ordenar y transformar los datos dentro de la estructura.

Los metodods son funciones que dan funcionalidades extras a los tipos de datos e los cuales se aplica.
un metodo es antesedido por un tipo de datos y un punto.
**Ejemplo**
el ejemplo mas claro de un metodo es el `.length` - este metodo nos permite o nos retorna la cantidad de caracteres de un string o la cantidad de elementos de una lista.
```js
"hola".length //4
[2,5,4,6,7].length //3
```
> [!TIP] los metodos en su mayoria solo se aplica a tipo de datos string, listas y objetos, en su gran parte son aplicaciones para listas.

### 6.1. Metodos para STRING
#### 1. LENGTH
devuelve la longitud de una cadena
```js
let mensaje="hola como estan"
console.log(mensaje.length)
//retorna -> 15
```
#### 2. toLowerCase
devuelve una cadena en minusculas
```js
let texto="HOLA"
console.log(texto.toLowerCase())
//retorna -> hola
```
#### 3. toUpperCase
devuelve una cadena en minusculas
```js
let texto="hola"
console.log(texto.toUpperCase())
//retorna -> HOLA
```
### 4. concat
combina el texto de dos a mas cadenas
```js
let nombre="kcapa"
let saludo="hola"
//let concatenando=saludo+nombre
console.log(saludo.concat(nombre))

let cad1="oh "
let cad1="me "
let cad1="vengo"
console.log(car1.concat(cad2,cad3))
//retorna -> oh me vengo
```
#### trim 
este metodo elimina los espacios que existen al inicio o final de una cadena de texto
```js
let texto="hola"
let nuevotexto=texto.trim() // hola
let otrotexto="hola"
let nuevootrotexto=otrotexto.trim()//hola
```
#### slice-corte
este metodo nos permite extraer partes de una cadena epecificando sus indices,donde comenzar y hasta donde mostrar
```js
let parrafo"hola soy percy"
// solo quiero que muestre percy
parrafo.slice(9)//percy
parrafo.slice(5,8)//soy
```
#### split
este metodo retorna una lista basandoce en unseparador que se le indique
```js
let parrafo="solo se que nada se"
parrafo.split("")//["solo","se","que","nada","se"]
let url="google.com/search?=gatitos"
let gatitos=url.split("=")//["google.com/search?",""gatitos]
console.log(gatitos[1])//gatitos
let listafrutas="manzana,tomate,pera,naranja"
listafrutas.split(",")
```
### 6.2. Metodos para LISTAS
#### crear una lista
```js
let lista=[]
```
#### agregamos elementos a una lista
```js
lista[0]="manzana"
```
#### agregando elementos al final de una lista
el metodo `push` agrega elementos al final de una lista 
```js
let lista=[]
lista.push("manzana")
```
#### agregando elementos al inicio de una lista 
el metodo `unshift` agrega elementos al inicio de una lista
```js
let amigos=[`rony`,`lisbet`,`jose`]
amigos.unshift("ronal")
```
#### removiendo elementos de una lista 
#### pop
el metodo `pop` al contrario de push extrae el ultimo elemento de una lista.
#### shift
el metodo `shift` al contrario de unshift extrae el primer elemento de ua lista
#### eliminando elementos de una lista
#### delete
elimina un elemento en bas ea su idice
```js
let texto=["hola","como","","estas"]
delete texto[2]
```
#### splice
este metodo elimina este elemento en base a su indice y a la cantidad de elementos a eliminar
```js
let vocals=[`a`,`e`,`e`,`i`,`o`,`u`]
vocals.splice(2.1)
```
#### conbinando o uniendo listas(arrays)
#### concat
este metodo crea un nuevo arrays que contiene los elementos del array original seguido por los elementos de una o ma arrays proporcionados
```js
let amigosprimaria=[`alfredo`,`luis`,`edgar`]
let amigossecundaria=[`edison`,`remy`,`muigel`]
let amigossuperior=[`jpsue`,`marmol`,`hamby`]
amigos.concat(amigosprimaria,amigossecundaria,amigossuperior)
consoles .log()
```
#### metodos para iterar una lista 
#### forEach
este metodo ejecuta una funcion anonima por cda elemento de un array
```js
let Numeros=[1,2,3,4,5,6]
Numeros.forEach(n=>console.log(n+1))
```
#### map
este metodo ejecuta una funcion anonima por cada elemento de un array,generando una nueva lista
```js
let Number=[1,2,3,4,5,6]
let nuewNumber=number.map(n=>{return n+1})
console.log(nuewNumber)
```
#### metodos para buscar elementos en una lista
#### includes
este metodo busca un valor en especifico y devuelve un valor booleano 
en caso de encontrar el valor buscado retorna true caso contrario false
```js
let vocales=[`a`,`i`,`o`,`u`]
let buscaE=vocales.includes(`e`)
// retorna false
let buscaA=vocales.includes(`a`)
// retorna true
```
#### filter 
este metodo se usa para encontrar elementos dentro de una lista que cumpla con cierta condicion 
```js
let numeros=[2,3,4,5,6,7,8]
// deseo una lista con los numeros que sean menor a 4
let nuevosNumeros=numeros.filter(n=>{n<4})

```
#### find
este metodo se usa para encontrar el primer elemento que cumpla con cierta condicion 
a diferencia el `filter` solo retorna un elemento el que coincida con la condicion
```js
let lisNumeros=[10,11,13,14]
// devuelbe el numeros el numero menor a 10
let menorDIez=lisNumero.find(n=>{return n>10})
console.log(menorDiez)
// retorna 11 - el primer elemento que coincide con la condicion 
```
### 6.3. Metodos para STRING
#### creando un objeto
```js
// objeto o diccionario vacio
let objeto={}
```
#### agregamos lementos a un objeto 
recuerden que un elemento de un objeto esta conformado por `clav:valor`
```js
objeto ["nombre"]="ruth"
objeto ["edad"]=18
objeto ["cui"]=08674523 
```
#### actualizando elementos de nuestro objeto
para realizar la actualizacion del valor de un elemento tenemos que acceder a travez de su
clave y aignarle el nuevo valor
**observacion** la clave debe ser la misma a actualizar de no existe creada una nueva
```js
objeto["edad"]=20
```
#### elimonando un elemento de nuestro objeto
para eliminar un elemento de un objeto hacemos uso de un operador unario `delete`
```js
delete objeto.cui
``` 




## Metodos para ARRAY
1. `Acceder:`
2. `Crear:`
3. `Modificar:` `Une listas:` **CONCAT** permite que dos listas se unan o concatenen en un array [1,2]. **REVERSE** hace lo mismo pero en orden inverso [2,1].
4. `Insertar:` **UNSHIFT** permite agregar el elemento que deseamos al principio de una lista siempre y cuando este entre parentecis (). **PUSH** permite agregar el elemento que deseamos al final de una lista siempre y cuando este entre parentecis ().
5. `Eliminar:` **POP** elimina el ultimo elemento, mientras que **SHIFT** elimina el primer elemento del array
6. `Ordenar:` **SORT** quiero que ordene de manera ascendente, o de manera alfabetica [1,2,3] o [a,b,c].
7. `Filter:` queremos filtrar elementos que no cumplen con ciertas condiciones.
8. ![alt text](image-2.png)

### "SCOPE" de "LET" y "VAR"
El scope se usa en variables.

Scope (ambitode ejecucion o el alcance). es como un contenedor que alverga todaslas variables que han sido declaradas dentro de un bloque o funcion del codigo. Dependiendo de donde y como se declare el ambito esta variable puede cambiar.

1. `GLOBAL:` **globalVar** es inicializada o declarada fuera del bloque.
2. `LOCAL:` **localVar** solo se puede acceder dentro de ese loque de codigo

- `VAR:` es un tipo de variable que sin importar en que bloque de codigo la declaremos podemos acceder desde cualquier lugar a este.
- `LET:` es un tipo de variable que solo podemos acceder unicamente a esta dentro un solo bloque de codigo.
## 7.es6
### arrow function 
### destructurin
este es una tecnica para el desempaquetado de listas u objetos de variables
esta tecnica facilita el acceso a los elementos de una lista u objeto
```js
let alumno={
   "nombre":"miguel",
   "edad":"19"
}
console .log (alumno.nombre)
console .log (alumno["edad"])
//desestructuracion
let {nombre,edad}=alumno


```
## 8. DOM

- segun sus siglas es Modelo deObjeto de Documento
- para la web es una API del navegador ,eson significa que nos proporciona una interfas para comunicarnos entrer html y javascript.
- Segun su funcionalidad DOM e el encargado de convertir documento html y css en objetos de javascript , o en un arbol de objetos.
- Para javascript el DOM es un objeto con el que podemos leer y modificar a nuestro antojo.
- La manera como DOM nos permite interactuar con nuestro documentos html y css son a traves de selectores.

### Selectores

Es la manera de como podremos manipular el DOM este es primer paso que devemos dominar para realizar operaciones de lectura o modificasion
#### captura de elementos
#### Selectores tradicionales

Estos selectores son metodos de documento porque`DOM` trabaja con el documento.
```js
//selector de id
document.getElemntByid("mi_div")
//<section id="mi_div"></section>
//--selectores por su atributo name
//<input name="dni" value="34556"><>
//dni="34556"
document.getElementByName("dni")
document.setElemntTagName("dni")
// todos los elementos 
//--Selectores por su tag
//<h1></h1>
document.getElementByTagName("h1")
//<div class=rojo></div>
```
[!tip] es la programacion web DAW se hace el uso de dos tecnicas , 1. obtecion de datos(get), 2. creacion de datos(set)
##### selectores modernos o avanzados
```js
//para la captura de un elemento, o el primer elemento que coincida conla busqueda
document.querySelector()
//busca y obtiene el elemento que coincida con el nombre de la clase 
document.querySelector(".nombre_clase")
//busca y obtiene el elemento que coincida con el monbre del id
document.querySelector("#nombre_id")
//busca y obtiene el elemento que coincida con el nombre de la etiqueta
document.querySelector("p")
document.querySelector(".input[name=dni]")

//para acceder a todas las coincidencias
//esto retorna un array con todas las coincidencias
document.querySelector(".nombre_clase")
```
#### acceder,actualizar contenido,crear y remover atributos

una vez capturado el elemento con `queryCelector` pueden hacer
uso de `textContent`para acceder al contenido del elemento,de
esta misma forma podemos editar o actualizar el contenido
`textContent`esto lo que es actualizar el contenido
anterior con el contenido que se le estaasignando
`textContent` solo se usa si deseamos agregar contenido de tipo
texto, si deseamos setear o agregarcontenido de tipo `html` se 
debera usar `innerHTML`
```js
//<p id="text">este es un contenido</p>
let etiquetaP=document.querySelector("#text")
console.log(etiquetaP.textContent)
//este es un contenido
etiquetaP.textContent="nuevo texto"
console.log(etiquetaP.textContent)
//nuevo texto

//<div id="contenedor"></div>
let div=document.querySelector("#contenedor")
div.innerHTML="<p>este es un parrafo</p>"
```
una vez ya conocido la forma de capturar la forma de elementos `html` 
y la forma de setear contenido(`textContent`) y html(`innerHTML`),
tambien podemos setear atributos y removerlos
```js
//<div id="contenido">contenido</div>
//data description
let contenido=documen.querySelector("#contenido")
//entre parentesis van dos parametros primero el nombre del atributo a crear y segundo el valor que debe tener
contenido.setAttribute("data-description","valor de mi data-description")
//<div id="contenido" data-description="valor de mi data-description">contenido</div>

//eliminar contenido el atributo creado
//entre parentesis el nombre del atributo que se ve eliminar
contenido.removeAttribute("data-description")
```
#### como agregar y eliminar elementos 
para crear un nuevo elemento no necesitamos un nuevo elemento por
que creamos un elemento nuevo
```js
//entre los parentesis la etiqueta a crear
let nuevoEtiquetaP=documen.createElement("p")
//agregar contenido a mi nueva etiqueta
nuevaEtiquetaP.textContent="informacion en el parrafo"

//para que esta informacion aparesca de manera visible en mi html debemos agregarlo a un elemento padre
/*
<body>
</body>
*/
let body=document.querySelector("body")
// hacer uso del metodo que me permite asignarle nuevos hijoa
body.appendChild(nuevoEtiqueta) 
//deseo eliminar ese elemento que acabo de crear
//usamos el nombre del elemento a eliminar y luego usamos el metodo remove()
nuevoEtiquetaP.remove()
```
#### modificar clases y estilos
estos metodos  que veremos acontinuacion no permitiran cambiar de 
manera interactiva los estilos scc se puedan  aplicar ciertas 
elementos  pero haciendo  uso de  js y logrando  sus cambios d estilo
de manera con estos elementos agregamos clases que existan.
-archivo **index.html**
```html
<!--DODTYPE html head-->
<body>
   <section id="principal"></section>
<body>   
<!---->
```
- archivo **style.css**
```css
.color-fondo-rojo{
   background-color:red;
}
```
-archivo **script.js**
```js
//<div></div>
let caja=document.queySelector("div")
//agregar una clase
let section=document.queySelector("#principal")
section.classlist.add("color-fondo-rojo")
//eliminar la clase 
secction.classlist.remove("colo-fondo-rojo")
//crear estilos directamente
section.style.backgroundColor="red"
```
### Eventos (tarea-averiguar)
los eventos son acciones o sucesos que ocurren en la página web y que pueden ser detectados por el navegador, como hacer clic en un botón, mover el mouse, presionar una tecla, cargar la página, etc. Los eventos permiten que tu página sea interactiva, ya que puedes ejecutar código cuando ocurren estas acciones.
## click
```js
// Suponiendo que tienes un botón en tu HTML: <button id="miBoton">Haz clic</button>
//selecciona un botón con el id miBoton y le agrega un evento para que, cuando el usuario haga clic sobre él, aparezca una alerta.
let boton = document.querySelector("#miBoton");
boton.addEventListener("click", function() {
    alert("¡Hiciste clic en el botón!");
});
```
## teclado
```js
//detecta cuando el usuario presiona cualquier tecla y muestra en la consola cuál fue la tecla presionada.
document.addEventListener("keydown", function(event) {
    console.log("Tecla presionada:", event.key);
});
```
## mouse
```js
//Selecciona un elemento con id miCaja y cambia su color de fondo a amarillo cuando el mouse pasa por encima.
let caja = document.querySelector("#miCaja"); // <div id="miCaja"></div>
caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "yellow";
});
```
## formulario
```js
//selecciona un formulario con id miFormulario y, al enviarlo, evita que la página se recargue y muestra una alerta.
let formulario = document.querySelector("#miFormulario"); // <form id="miFormulario"></form>
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    alert("Formulario enviado");
});
```
