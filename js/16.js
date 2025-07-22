//FUNCIONES

//Declaracion de la funcion
function sumar() {
    console.log(10 + 10);
}

sumar(); //llamada a la funcion, ejecuta el codigo dentro de la funcion, en este caso imprime 20 en la consola

//Expresion de la funcion
const sumar2 = function() {
    console.log(5 + 5);
}   

sumar2(); //llamada a la funcion, ejecuta el codigo dentro de la funcion, en este caso imprime 10 en la consola

//IIFE (Inmediatamente Invoked Function Expression)
(function() {
    console.log('Esto es una IIFE \" una funcion que se ejecuta inmediatamente al ser declarada\"');
})(); //se ejecuta inmediatamente, no es necesario llamarla, imprime 'Esto es una IIFE' en la consola