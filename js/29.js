// try catch

const n1 = 10;
const n3 = 30;

console.log(n1);
/*console.log(n2); se va generar error en la consola y no va a mostrar la siguiente linea de codigo para eso usamos un try catch a continuación*/

try {
    console.log(n2);
} catch (error) {
    console.log(error);
} // esto va igulmente a mostrar el error indicando la linea en la que se encuentra pero permite seguir ejecutando la sdemas lineas de codigo

console.log(n3);