/*

Ejercicio sobre funciones constructoras

 1. Crea una función constructora llamada Libro que reciba titulo, autor y precio.

 2. Usa new para crear dos libros diferentes y muéstralos en consola.

 3. Agrega dentro del constructor una propiedad extra llamada disponible que siempre sea true.

 4. Explica con tus palabras qué hace la palabra clave this en un constructor.

 5. Describe por qué es una buena práctica nombrar la función constructora iniciando con mayúscula.

*/

// RESPUESTAS

// 1. 

function Libro(titulo, autor, precio, disponible) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.disponible = true; // no sabia como hacerlo, pense y lo hice asi no se si esta bien o mal
} //estructura de los objetos

// 2.

const libro1 = new Libro('el amor en tiempos de adversidad', 'Miguel Adolfo Ladino Gonzales', 50000);
const libro2 = new Libro('el arte de la guerra', 'Sun Tzu', 20000);

console.log("objetos construidos con object constructor");
console.log(libro1);
console.log(libro2);

// 3. ver punto 1 ya quedo incluido en el constructor

// 4. se asigna entre las llaves del constuctor y el this.loquesea me peermite hacer referencia al libro o los parametros que esten asignados  dentro del constructor y me llame exclusivamente ellibro que pertenece a ese objeto.

// 5. es una convencion que se usaba o se usa aun no se antes del ES6 para no confundirlas con las variables convencionales Libro,Producto, Almacen... lo que sea.