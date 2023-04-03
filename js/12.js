//Object Methods

//'use strict'; //si antes de const producto = {..} usamos otra linea de codigo llamada 'use strict'; en la conbsola nos va a generar n error ya que obliga el uso estricto de el manejo de JS donde dira "12.js:11 Uncaught TypeError: Cannot add property imagen, object is not  extensible at 12.js:11:17" que en la linea en este caso la linea de codigo 11 presenta un error 

//object.freeze

const producto = {
    nombreProducto : 'Monitor 30 pulgadas',
    precio : 700000,
    disponible : true,
}

Object.freeze(producto); //esto congela el objeto llamado producto, e impide que sea modificado, no permite crear ni eliminar propiedades , al ver la consola vemos que sigue exactamente igual

producto.imagen = 'imagen.jpg';
delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto)); //esto nos va a indicar si el objeto esta o no congelado o sellado


//SEAL - existe uno similar al freexe pero llamado seal

const productos = {
    nombreProducto : 'Monitor 50 pulgadas',
    precio : 700000,
    disponible : false,
}

Object.seal(productos); //al igual que freeze no deja crear ni eliminar propiedades del objeto, pero si deja modificar el valor de las propiedades ej: 

productos.precio = 1000000;
productos.imagen = 'imagen.jpg';
delete productos.precio;

console.log(productos);
console.log(Object.isSealed(productos));