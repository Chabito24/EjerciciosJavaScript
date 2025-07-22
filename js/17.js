//Diferencia entre un metodo y una función

const numero1 = 10;
const numero2 = "20";

console.log( parseInt(numero2)); // parseInt es una funcion que convierte un string a un numero entero, en este caso convierte el string "20" a un numero entero 20, y luego lo suma con el numero1, es decir, 10 + 20 = 30

console.log( numero1.toString() ); // toString es un metodo que convierte un numero a un string, en este caso convierte el numero1 a un string "10", y luego lo imprime en la consola, es decir, muestra "10" en la consola

//Diferencia entre un metodo y una funcion
//la funcion lleva el nombre de la funcion seguido entre parentesis el nombre de los parametros que recibe, en este caso parseInt(numero2) y toString() no lleva parametros porque no recibe ninguno, es decir, parseInt es una funcion que recibe un parametro y toString es un metodo que no recibe parametros, pero ambos realizan una accion sobre el valor que se les pasa, en este caso convertir un string a un numero entero y convertir un numero a un string respectivamente.


//importante no hay funciones que pasen de string a numero, pero si hay funciones que convierten un string a un numero, como parseInt, parseFloat, Number, etc. y metodos que convierten un numero a un string, como toString(), toFixed(), etc.

//importante, no hay metodos que conviertan un string a un numero, pero si hay metodos que convierten un numero a un string, como toString(), toFixed(), etc. y funciones que convierten un string a un numero, como parseInt, parseFloat, Number, etc.

