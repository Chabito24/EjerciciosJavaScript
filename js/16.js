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
})(); //se ejecuta inmediatamente, no es necesario llamarla, imprime 'Esto es una IIFE' en la consola,los iife son funciones que se ejecutan inmediatamente al ser declaradas, no es necesario llamarlas, se usan para encapsular codigo y evitar conflictos con otras variables o funciones en el mismo scope, es decir, se ejecuta en su propio contexto y no afecta al resto del codigo, es una buena practica para evitar conflictos de nombres y mantener el codigo organizado.

//hoisting IMPORTANTE
//hy una diferencia entre la declaracion de una funcion y una expresion de funcion, la declaracion de una funcion se eleva al inicio del archivo, mientras que la expresion de funcion no, por lo tanto, si intentamos llamar a una funcion antes de declararla, nos dara un error si es una expresion de funcion, pero no si es una declaracion de funcion.
