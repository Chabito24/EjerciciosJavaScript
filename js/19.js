//Funciones que retornan valores
function sumar(numero1, numero2) {
    return numero1 + numero2; //retorna la suma de los dos numeros que se le pasan como argumentos al llamar a la funcion, es decir, devuelve el resultado de la suma de los dos numeros que se le pasan como argumentos al llamar a la funcion
}
 sumar(2, 3);

 const resultado = sumar(2, 3); //llamada a la funcion y se guarda el resultado en una variable, en este caso resultado sera igual a 5
 console.log(resultado); //imprime el resultado de la suma en la consola, en este caso 5


 //EJEMPLO MAS AVANZADO (con un carrito de compras)

 let total = 0; //variable que almacena el total de la suma de los numeros

 function agregarCarrito(Precio) {
    return total += Precio; //retorna el total acumulado de los precios de los productos que se le pasan como argumentos al llamar a la funcion, es decir, suma el precio del producto al total acumulado y devuelve el nuevo total
}

function calcularImpuesto(total) {
    return total * 0.19; //retorna el impue sto del total acumulado, en este caso el 16% del total
}

total = agregarCarrito(150000);
total = agregarCarrito(220000);
total = agregarCarrito(310000);// va sumando los precios de los productos al total acumulado, es decir, 100 + 200 + 300 = 600
console.log("Subtotal $" + total); //imprime el total del carrito en la consola, en este caso 600

const impuesto = calcularImpuesto(total); //llamada a la funcion calcularImpuesto y se guarda el resultado en una variable, en este caso impuesto sera igual a 114 (600 * 0.19)
console.log("IVA $" + impuesto); //imprime el impuesto del

const totalAPagar = calcularImpuesto(total);
console.log("Total $" + (total + totalAPagar)); //imprime el total a pagar con impuesto en la consola, en este caso 600 + 114 = 714, es decir, el total del carrito mas el impuesto del 19% del total acumulado


