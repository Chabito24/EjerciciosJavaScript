/*

Ejercicio sobre números y operadores

 1. Declara dos variables numéricas y muestra en consola la suma, la resta, la multiplicación y la división de esas dos variables.

 2. Usa el operador módulo % con dos números distintos y describe el resultado que obtienes.

 3. Declara una variable string que contenga un número y otra numérica. Muestra en consola qué pasa si las sumas sin convertir la string.

 4. Convierte esa string a número usando Number() y muestra el resultado de la suma en consola.

5. Explica con tus palabras en qué tipo de problemas reales usarías el operador módulo %.

*/

//RESPUESTAS

// 1. 

const n1 = 5;
const n2 = 10;

console.log(n1 + n2); //15
console.log(n1 - n2); // -5
console.log(n1 * n2); // 50
console.log(n2 / n1); // 2

// 2. 

console.log(n2 % n1); // 0 es el residuo

// 3. 

const n3 = "20";
const n4 = 2;

console.log(n3 + n4); // 202 en color blanco opr que es un string como lo muestra el typeOf a continuación.
console.log(typeof(n3 + n4)); 

// 4. 

console.log(Number(n3) + n4); // 22

// 5. hallando valores pares o impares de un listado de numeros los que tengan residuo 1 son impares y los que tengan residuo 0 son pares 