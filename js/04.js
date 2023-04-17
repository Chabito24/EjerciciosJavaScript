//tipos de datos: STRINGS O CADENAS DE TEXTO

const producto = 'Monitor de 20 pulgadas';
const producto1 ='Monitor de 20\"'
const producto2 = String('Monitor 30 pulgadas');
const producto3 = new String('Monitor 50 pulgadas'); //object

console.log(producto);
console.log(producto1);
console.log(producto2);
console.log(producto3);

console.log(typeof producto); // muestra en consola que es un string
console.log(typeof producto1); // string y muestra las comillas esta se separa con una diagonal invertiva Alt+92 para que no genere error con las comillas ya sean dobles o sencillas del string
console.log(typeof producto2); // muestra en consola que es un string
console.log(typeof producto3); // muestra en consola que es un object


//la sintaxis mas utilizada

// la mas utilizada es la primera la detallo a continuación:

// const producto = "Monitor de 20 pulgadas";

// console.log(producto) lo dejo comentado para qeu no me genere error en la consola del navegador..


//METODOS PARA LOS STRING

const tweet = 'aprendiendo javascript con el curso de desarrollo web completo';

console.log(tweet. length); // este .length me muestra en la consola la cantidad de caracteres que tiene la frase que ubique en el string, en este caso debe mostrar un total de 62 caracteres

//METODO IndexOf (retorna una posicion)

console.log(tweet.indexOf ('javascript')) // el metodo IndexOf, debe ir seguido de parentesis y entre el parentesis la palabra que quiero buscar dentro del string, en este caso javascript, en consola me muestra el numero 12, es decir, que la palabtrra se encuentra escrita despues del caracter numero 12, 

console.log(tweet.indexOf('JavaScript')) // si la palabra esta escrito de forma diferente en este caso con la J y la S mayusculas o cimplemente no encuentra la palabra me va a generar en consola el numero -1, es decir un numero uno megativo

//METODO Includes (retorna un true o false)

console.log(tweet.includes ('javascript')) //como si existe me dice true
console.log(tweet.includes ('JavaScript')) //al contrario como la palabra esta mal escrita o no existe me genera un false

//IMPORTANTE existen bastantes METODOS  pueden ser mas de 30 Metodos, cada uno para validar o retornar ciertos valores dentro de una cadena "string"