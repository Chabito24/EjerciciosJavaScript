const nombre = 'Edward';
const email = 'edalmaji87@gmail.com';

console.log(nombre);
console.log(email);

//CONCATENACIÓN

console.log(nombre + email);//con numeros el mas me suma, perocon string me concatena, en este caso dos variables

console.log(nombre + " " + email);//de esta manera me crea un espacio en medio del nombre y del email sumando un string en medio de ambas variables. 

console.log("Nombre: " + nombre + " Email: " + email);//este es usado pero si te llega a faltar el signo mas despues del String te genera un error, por ello vamos a usar TEMPLATE STRINGS




//TEMPLATE STRINGS ó STRINGS LITERALS

//comilla invertida `` se genera en Windows con el codigo ASCII Alt + 96
console.log(`Nombre: ${nombre} Email: ${email}`)//primero se debe colocar todo dentro de comillas invertidas Zlt + 96, segundo se coloca el nombre del string segido un espacio y un signo de dolar y entre llaves el nombre de la variable asi ${nombre}, esto  dice que lo que esta alli metido enre llaves es la variable.

//esta opción de TEMPLATE STRINGS es mas usada que la opción de concatenar con el signo de mas, sin embargo ambas tienen el mismo efecto




