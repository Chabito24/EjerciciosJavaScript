//ARROW FUNCTIONS
// Las funciones flecha son una forma más concisa de escribir funciones en JavaScript.

const sumar2 = function(n1, n2) {
    console.log("declaracion de la funcion normal", n1 + n2);
}   

sumar2(5, 10); 

//Sintaxis arrow functions

const sumar3 = (n1, n2)=> { // estas llaves sonopcionales, si solo hay una linea de codigo se pueden omitir
    console.log("declaracion de la funcion arrow functions", n1 + n2);
}   

sumar3(5, 10); 

const sumar4 = (n1, n2) => console.log("declaracion de la funcion arrow functions sin llaves", n1 + n2); //si solo hay una linea de codigo se pueden omitir las llaves y el return
sumar4(5, 10);


//EJERCICIO

const aprendiendo =(tecnologia) => `Aprendiendo ${tecnologia}`; //se puede usar template literals para concatenar strings
console.log(aprendiendo("JavaScript")); //imprime "Aprendiendo JavaScript"


const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

//ARRAY METODS CPN ARROW FUNCTIONS

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
meses.forEach((mes) =>{
    console.log(mes);
}); //recorre el arreglo meses y muestra cada mes en la consola

//ESTRUCTURAS DE CONTROL  - se explicara mejor mas adelanrte

meses.forEach((mes) =>{
    if(mes == 'Enero') {
        console.log('Enero es el primer mes del año');
    }
}); //basicamente con el if decimos que si en mes existe marzo posteriormente se ejecuta el console.log que nos dira que enero es el primer mes del año, si no existe no se ejecuta nada, es una estructura de control que nos permite controlar el flujo de ejecucion del codigo.


//Some, ideal para arreglos de objetos

//const existe = carrito.some((producto) => {
   // return producto.nombre === 'Tablet'; //verifica si existe un producto con el nombre Tablet en el arreglo carrito, devuelve true o false
//});
const existe = carrito.some((producto) => producto.nombre === 'Tablet'); //el return se puede eliminar el lo asume no es necesario colocarlo

console.log("el producto existe",existe); //imprime true si existe, false si no existe

//haremo slo mismo quitar el return para los demas

const totalArrow = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0); //es lo mismo que el anterior pero usando arrow functions, es una sintaxis mas corta y moderna de escribir funciones en JavaScript
console.log("El total a pagar es: $" + totalArrow); //imprime el total a pagar sumando el precio de todos los productos en el carrito usando arrow functions

//Filter
const filtrados = carrito.filter((producto) => producto.precio > 400
); 

console.log("Productos filtrados con precio mayor a 400:", filtrados); //imprime los productos filtrados que tienen un precio mayor a 400  