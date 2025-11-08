// ejerccio basado en 01.js

// Ejercicio con var 

// 1. declara 3 variables usando var
// * producto (tipo string, por ejemplo 'Teclado')
// * precio (tipo número, por ejemplo 150)
// * disponible (tipo booleano, por ejemplo true)

// 2. Imprime todas las variables con console.log() en una sola línea usando concatenación o plantilla literal:

// 3. Cambia el valor de producto y precio, y vuelve a imprimirlos en consola:

// 4. Declara varias variables en una sola línea:

// solucion

// 1. declara 3 variables usando var

var producto = 'celular';
var precio = 500;
var disponible = true;

// 2. Imprime todas las variables con console.log() en una sola línea usando concatenación o plantilla literal:
console.log(`Producto: ${producto}, Precio: $${precio}, Disponible: ${disponible}`); // Usando plantilla literal

console.log("Producto: " + producto + ", Precio: $" + precio + ", Disponible: " + disponible); // Usando concatenación

// 3. Cambia el valor de producto y precio, y vuelve a imprimirlos en consola:
producto = 'android';
precio = 1200;
console.log(`producto: ${producto}, precio: ${precio}`)

// 4. Declara varias variables en una sola línea:
var marca = 'Motorola',
    modelo = 'Moto G',
    color = 'gris';

console.log(`Marca: ${marca}, Modelo: ${modelo}, Color: ${color}`); // Imprime las nuevas variables

console.log()

