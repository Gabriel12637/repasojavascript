// crear unalista de objetos de 5 veiculos que tengan informacion como marca, modelo, año, precio,numero de placa
// actualizar el valor de una de sus cararcteristicas 
// agregar un nuevo veiculo a la lista
// eliminar un veiculo de la lista
// poder filtrar los vehiculos por año de fabricacion
// poder buscar un veiculo por su numero de placa

let veiculos = [
    {marca: "Toyota", modelo: "Corolla", año: 2020, precio: 20000, placa: "ABC123"},
    {marca: "Honda", modelo: "Civic", año: 2019, precio: 22000, placa: "DEF456"},
    {marca: "Ford", modelo: "Focus", año: 2018, precio: 18000, placa: "GHI789"},
    {marca: "Chevrolet", modelo: "Malibu", año: 2021, precio: 25000, placa: "JKL012"},
    {marca: "Nissan", modelo: "Sentra", año: 2017, precio: 17000, placa: "MNO345"},
    {marca: "mclaren", modelo: "p1", año: 2013, precio: 23000, placa: "PQR678"}
];
// actualizar el valor de una de sus cararcteristicas
veiculos[0].precio = 21000; 
console.log(veiculos); 
// agregar un nuevo veiculo a la lista
veiculos.push({marca: "mclaren", modelo: "p1", año: 2022, precio: 23000, placa: "PQR678"});
console.log(veiculos);
// eliminar un veiculo de la lista
veiculos = veiculos.filter(veiculos => veiculos.placa !== "def456");
console.log(veiculos);
// poder filtrar los vehiculos por año de fabricacion
let veiculos2013 = veiculos.filter(veiculos => veiculos.año === 2013)
console.log(veiculos2013);
// poder buscar un veiculo por numero de placa 
let veiculoplaca = veiculos.find(veiculos => veiculos.placa === "PQR678");
console.log(veiculoplaca); 