//forEach y map

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisor 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//forEach y map son metodos exclusivos de arreglos que me permiten recorrer un arreglo y ejecutar una funcion por cada elemento del arreglo, la diferencia entre forEach y map es que forEach no retorna un nuevo arreglo, mientras que map si lo hace, es decir, forEach se usa para ejecutar una funcion por cada elemento del arreglo sin retornar un nuevo arreglo, mientras que map se usa para transformar cada elemento del arreglo y retornar un nuevo arreglo con los resultados de la transformacion

//forEach

carrito.forEach(function(producto, index) { //recorre el arreglo carrito y ejecuta la funcion por cada elemento del arreglo, donde producto es el elemento actual y index es el indice del elemento actual
    console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`); //imprime el indice + 1, el nombre y el precio de cada producto en el carrito
}); //este es un ejercicio que me permite recorrer un arreglo de objetos y acceder a sus propiedades, en este caso accedo a la propiedad nombre y precio de cada objeto del arreglo carrito usando forEach


carrito.forEach((producto, index) => console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`)); //otra forma de usar forEach usando una funcion flecha

const arreglo1 = carrito.forEach((producto, index) => ("forEach", `${index + 1}. ${producto.nombre} - $${producto.precio}`));

console.log("forEach ", arreglo1); //forEach no retorna un nuevo arreglo, por lo tanto arreglo1 sera undefined, ya que forEach no retorna nada, solo ejecuta la funcion por cada elemento del arreglo
//map

carrito.map((producto, index) => console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`)); //map recorre el arreglo carrito y ejecuta la funcion por cada elemento del arreglo, donde producto es el elemento actual y index es el indice del elemento actual, pero a diferencia de forEach, map retorna un nuevo arreglo con los resultados de la transformacion, en este caso no estamos transformando nada, solo estamos imprimiendo el nombre y el precio de cada producto en el carrito
const arreglo2 = carrito.map((producto, index) => (`${index + 1}. ${producto.nombre} - $${producto.precio}`)); //crea un nuevo arreglo con los resultados de la transformacion, en este caso un arreglo de strings con el indice + 1, el nombre y el precio de cada producto en el carrito
console.log("map ", arreglo2); //imprime el nuevo arreglo creado por map, que contiene los nombres y precios de los productos del carrito en formato de string

//DIFERENCIAS

//tando forEach como map recorren el arreglo y ejecuta una funcion por cada elemento del arreglo, ForEach no retorna un nuevo arreglo siempre retora en consola un "undefined" sin embargo map retorna un nuevo arreglo con lo que devuelva esa funcion para cada uno de los elementos, 

//Cuando usarlos?

//Usar forEach cuando se quiera por ejemplo mostrar en consola, modificar variables externas, actualizar el DOM, sumar a una variable externa, registrar logs entre otras acciones secundarias siempre y cuando no se necesite un nuevo arreglo.

//usar map cuando se requiere transformar el arreglo original en otro , por ejemplo, tranformar de objetos a string, de numeros a dobles, entre otros.

//si necesito un nuevo arreglo usar map y si solo quiero recorrer los elementos del arrelo sin devolver un nuevo arreglo usar forEach.