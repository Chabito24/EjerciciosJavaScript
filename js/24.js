//ITERADORES

//For loop
console.log(1);
console.log(2);
console.log(3);
console.log(4);

for(let i = 0; i <= 10; i++) { //i es una variable que se inicializa en 0, se incrementa en 1 en cada iteracion y se detiene cuando i es menor o igual a 10
    console.log("for loop ", i); //imprime el valor de i en cada iteracion, es decir, imprime los numeros del 0 al 4 en la consola
};

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) { //si i es par, es decir, si el residuo de i dividido por 2 es igual a 0
        console.log("for loop par ", i); //imprime el valor de i si es par, es decir, imprime los numeros pares del 0 al 10 en la consola
    } else {
        console.log("for loop impar ", i); //imprime el valor de i si es impar, es decir, imprime los numeros impares del 0 al 10 en la consola
    }
} //este es un ejercicio que me permite hallar todos los nmeros pares entre 1 y 10 donde decimos if(i % 2 === 0) = si el indice que inicia en cero valida desde el indice 1 hasta el 10  dividelo por dos y si e residio % es 0  entonces en el .log imprime el resultado
//el else hace lo mismo pero me muestra los impares


//EJERCICIO CARRITO DE COMPRAS


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

for (let i = 0; i < carrito.length; i++) { //recorre el arreglo carrito desde el indice 0 hasta el ultimo indice, es decir, recorre todos los productos del carrito
    console.log(carrito[i].nombre); //imprime el nombre de cada producto en el carrito, es decir, imprime los nombres de los productos del carrito en la consola, puedo cambiar el .nombre por .precio y me imprime el precio o quitar el.nombre o el.precio y me muestra toda la informacion de los productos del carrito.

} //este es un ejercicio que me permite recorrer un arreglo de objetos y acceder a sus propiedades, en este caso accedo a la propiedad nombre de cada objeto del arreglo carrito


//While loop

let i = 0; //inicializo la variable i en 0
while(i <= 10) { //mientras i sea menor o igual a 10
    console.log("while loop ", i); //imprime el valor de i en cada iteracion, es decir, imprime los numeros del 0 al 10 en la consola
    i++; //incremento i en 1 en cada iteracion
} //este es un ejercicio que me permite imprimir los numeros del 0 al 10 en la consola usando un while loop, es decir, mientras i sea menor o igual a 10 se imprime el valor de i y se incrementa en 1 en cada iteracion

//ejercicio 2 hayando el par e impar
let h = 1;
while(h <= 10) { //mientras h sea menor o igual a 10
    if(h % 2 === 0) { //si h es par, es decir, si el residuo de h dividido por 2 es igual a 0
        console.log("while loop par ", h); //imprime el valor de h si es par, es decir, imprime los numeros pares del 1 al 10 en la consola
    } else {
        console.log("while loop impar ", h); //imprime el valor de h si es impar, es decir, imprime los numeros impares del 1 al 10 en la consola
    }
    h++; //incremento h en 1 en cada iteracion
} //este es un ejercicio que me permite hallar todos los nmeros pares e impares entre 1 y 10 donde decimos if(h % 2 === 0) = si el indice que inicia en uno valida desde el indice 1 hasta el 10 dividelo por dos y si e residio % es 0 entonces en el .log imprime el resultado

//ejercicio carrito de compras con while loop
let c = 0; //inicializo la variable c en 0 
while(c < carrito.length) { //mientras c sea menor que la longitud del arreglo carrito
    console.log(carrito[c].nombre); //imprime el nombre de cada producto en el carrito, es decir, imprime los nombres de los productos del carrito en la consola
    c++; //incremento c en 1 en cada iteracion
} //este es un ejercicio que me permite recorrer un arreglo de objetos y acceder a sus propiedades, en este caso accedo a la propiedad nombre de cada objeto del arreglo carrito usando un while loop   

//contar hacia atras
let x = 5; //inicializo la variable x en 5
while (x >= 0) { //mientras x sea mayor o igual a 0
    console.log("Cuenta regresiva:", x); //imprime el valor de x en cada iteracion, es decir, imprime los numeros del 5 al 0 en la consola
    x--; //decremento x en 1 en cada iteracion
}




//Do while loop

let y = 0; //inicializo la variable y en 0
do {
    console.log("do while loop ", y); //imprime el valor de y en cada iteracion, es decir, imprime los numeros del 0 al 10 en la consola
    y++; //incremento y en 1 en cada iteracion
} while(y <= 10); //mientras y sea menor o igual a 10, es decir, se ejecuta al menos una vez antes de verificar la condicion, incluso si la condicion es falsa desde el principio

//diferencias entre while y do while
//El do while loop se ejecuta al menos una vez, incluso si la condicion es falsa, es decir si cambio el valor de y por 100 me imprime en consola ese 100 pero don wile no me imprimiria nada porque la condicion no se cumple desde el principio.