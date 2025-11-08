//CONCATENACIÓN Y TEMPLATE STRINGS

const nombre = 'Edward';
const email = 'emartinezj1802@gmail.com';

console.log("Nombre:",nombre);
console.log("Correo:",email);

//CONCATENACIÓN

console.log("Nombre + Correo:",nombre + email);//con numeros el mas me suma, perocon string me concatena, en este caso dos variables

console.log("Nombre + \" \" + Correo:",nombre + " " + email);//de esta manera me crea un espacio en medio del nombre y del email sumando un string en medio de ambas variables. 

console.log("Nombre:",nombre + " Email:",email);//este es usado pero si te llega a faltar el signo mas despues del String te genera un error, por ello vamos a usar TEMPLATE STRINGS




//TEMPLATE STRINGS ó STRINGS LITERALS 

//comilla invertida `` se genera en Windows con el codigo ASCII Alt + 96
console.log(`Nombre: ${nombre} Email: ${email}`);//primero se debe colocar todo dentro de comillas invertidas Alt + 96, segundo se coloca el nombre del string segido un espacio y un signo de dolar y entre llaves el nombre de la variable asi ${nombre}, esto  dice que lo que esta alli metido enre llaves es la variable.

//esta opción de TEMPLATE STRINGS es mas usada que la opción de concatenar con el signo de mas, sin embargo ambas tienen el mismo efecto no es reutilizable, es decir si quiero cambiar el nombre o el email debo cambiarlo en cada console.log



//FUNCION REUTILIZABLE

function mostrarInfo(nombre, email) {
  return `Hola ${nombre}, tu correo registrado es ${email}`;
}

console.log(mostrarInfo(nombre, email));
//con esta funcion reutilizable podemos mostrar el nombre y el email de una manera mas ordenada, ya que si queremos cambiar el nombre o el email solo debemos cambiarlo en la variable y no en cada console.log