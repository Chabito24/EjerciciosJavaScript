/*


1. Declara un string que contenga al menos dos palabras separadas por espacios y verifica cuántos caracteres tiene.

2. Usa indexOf para buscar una palabra que sí exista y otra que no exista dentro del string, y describe los resultados.

3. Usa includes para verificar si existe una palabra exacta y una con diferente combinación de mayúsculas/minúsculas, describe qué imprime en cada caso.

4. Explica por qué length no se usa con paréntesis mientras que indexOf e includes sí.

5. Da un ejemplo de una situación práctica en un proyecto real donde usarías includes y por qué.

*/

// Respuestas

// 1. 

const texto = 'En la GUERRA no hay puestos de observación, el valor se demuestra en el combate';

console.log(texto.length);

// 2. 

console.log(texto.indexOf('GUERRA')) //en consola 6 imprime apartir donde inicia
console.log(texto.indexOf('Guerra')) //en consola -1

// 3. 

console.log(texto.includes ('combate')) 
console.log(texto.includes ('lucha')) 


// 4. lengt es una propiedad por el contrario indexOf es n metodo lleva parentesis para asignarle un parametro en este caso busqueda de una palabra dentro del string

// 5. En una revision necesito validar si se confirmo el pago de un afactura por ejemplo no se el alcance especifico aun pero creeria que con includes al validar si es true confirmo el pafgo de la factura para corroborar con el saldo en el banco, puede ser un ejemplo, algo mas sencillo que se me ocurre es validar si un producto ya esta incluido dentro de in listado de productos en un almacen puede ser.


// ADICIONAL tolOWERcASE

console.log(texto.toLowerCase().includes())