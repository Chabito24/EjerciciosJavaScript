//FUNCIONES CON PARAMETROS Y ARGUMENTOS

//Declaracion de la funcion
function sumar(numero1, numero2) { //Numero 1 y numero 2 son parametros, son variables que se definen en la funcion y se usan para recibir valores cuando se llama a la funcion
    console.log(numero1 + numero2); //suma los dos numeros que se le pasan como argumentos al llamar a la funcion, es decir, imprime en la consola la suma de los dos numeros que se le pasan como argumentos al llamar a la funcion
}

sumar(10, 10); //argumentos o valores reales 
sumar(5, 5);
sumar(3, 3);
sumar(1, 2);
sumar(50, 20); //la funcion se vuelve mas dinamica y se puede reutilizar con diferentes valores, es decir, se puede llamar a la funcion con diferentes valores y la funcion sumara esos valores, en este caso 10 + 10 = 20, 5 + 5 = 10, 3 + 3 = 6, 1 + 2 = 3, 50 + 20 = 70


//Expresion de la funcion

const sumar2 = function(numero1, numero2) {
    console.log(numero1 + numero2);
}   

sumar2(5, 5);
sumar2(3, 3);
sumar2(1, 2);
sumar2(50, 20); //es lo mismo que la declaracion de la funcion pero usando una expresion de funcion, es decir, se define una variable que almacena la funcion y luego se llama a la funcion con diferentes valores, en este caso 5 + 5 = 10, 3 + 3 = 6, 1 + 2 = 3, 50 + 20 = 70


//Parametros por defecto
function sumarConDefecto(numero1 = 0, numero2 = 0) { //se le asigna un valor por defecto a los parametros, si no se le pasa un valor al llamar a la funcion, se usara el valor por defecto
    console.log(numero1 + numero2);

}
sumarConDefecto(); //llamada a la funcion sin pasarle argumentos, se usara el valor por defecto 0 + 0 = 0
sumarConDefecto(10); //llamada a la funcion pasando un solo argumento, se usara el valor por defecto 0 para el segundo parametro, es decir, 10 + 0 = 10

