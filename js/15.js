//ARRAY METHODS 

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

//ARREGLO DE OBJETOS

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

//forEach
meses.forEach(function(mes) {
    console.log(mes);
}); //recorre el arreglo meses y muestra cada mes en la consola

//ESTRUCTURAS DE CONTROL  - se explicara mejor mas adelanrte

meses.forEach(function(mes) {
    if(mes == 'Enero') {
        console.log('Enero es el primer mes del año');
    }
}); //basicamente con el if decimos que si en mes existe marzo posteriormente se ejecuta el console.log que nos dira que enero es el primer mes del año, si no existe no se ejecuta nada, es una estructura de control que nos permite controlar el flujo de ejecucion del codigo.

//Includes
const resultado = meses.includes('Enero'); //verifica si el mes de enero existe en el arreglo meses, devuelve true o false
console.log(resultado); //No imprime elmensaje como lo hicimos con el forEach pero si imprime true si existe, false si no existe, este funciona bienen un arreglo plano de objetos como lo vimos con de meses, por ejemplo si queremos saber si existe un producto en el carrito podemos usarlo de la siguiente manera:

//Some, ideal para arreglos de objetos

const existe = carrito.some(function(producto) {
    return producto.nombre === 'Tablet'; //verifica si existe un producto con el nombre Tablet en el arreglo carrito, devuelve true o false
});
console.log("el producto existe",existe); //imprime true si existe, false si no existe

//¿como calcular el valor a pagar?

const total = carrito.reduce(function(acumulador, producto) {
    return acumulador + producto.precio; //suma el precio de todos los productos en el carrito, es decir, recorre el arreglo carrito y suma el precio de cada producto al acumulador, devolviendo el total al final, IMPORTANTE: el nombre acumulador puede ser cualquiera, es simplemente un nombre que le doy para identificar el valor que se va acumulando, en este caso el precio de cada producto del carrito, pero perfectamente en vez de acumulador pude haber dado otro nombre como gato por ejemplo, lo importante es que se entienda que es el valor que se va acumulando a medida que se recorre el arreglo carrito. ACUMULADOR → es la suma que llevas hasta ahora (cambia cada vuelta). PRODUCTO → es el objeto del carrito que estás leyendo en esa vuelta (no acumula nada, solo se usa para sumar su precio).producto → es el objeto del carrito que estás leyendo en esa vuelta (no acumula nada, solo se usa para sumar su precio)
}, 0); //el segundo parametro es el valor inicial del acumulador, en este caso 0
console.log("El total a pagar es: $" + total); //imprime el total a pagar sumando el precio de todos los productos en el carrito

//Arrow functions
const totalArrow = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0); //es lo mismo que el anterior pero usando arrow functions, es una sintaxis mas corta y moderna de escribir funciones en JavaScript
console.log("El total a pagar es: $" + totalArrow); //imprime el total a pagar sumando el precio de todos los productos en el carrito usando arrow functions

//Filter
const filtrados = carrito.filter(function(producto) {
    return producto.precio > 400; //filtra los productos que tienen un precio mayor a 400, devuelve un nuevo arreglo con los productos que cumplen la condicion, pueden ser mayores > menores < iguales === o diferentes !== al valor que se indique, en este caso 400, si no hay productos que cumplan la condicion devuelve un arreglo vacio.
}); 

console.log("Productos filtrados con precio mayor a 400:", filtrados); //imprime los productos filtrados que tienen un precio mayor a 400

const filtradosArrow = carrito.filter(producto => producto.precio > 400);
console.log("Productos filtrados con precio mayor a 400:", filtradosArrow); // Es lo mismo que el anterior pero usando el metodo de arrow, imprime los productos filtrados que tienen un precio mayor a 400 usando arrow functions    








