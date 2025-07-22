//ESTRUCTURAS DE CONTROL

const clave = 1235;
if(clave === 1234) {
    console.log('la clave es correcta');
}//esto es codigo condicional si la funcion se cumple lo  imprime en el .log si no no muestra nada, si en puntaje = colocamos 1001 no mostraria nada y no ejecutaria el codigo
else {
    console.log('la clave es incorrecta, intente de nuevo');
} //esto es codigo condicional si la funcion no se cumple lo  imprime en el .log si no no muestra nada, si en clave = colocamos 1234 mostraria 'la clave es correcta' y no ejecutaria el codigo de la segunda condicion, es decir, si la clave es correcta no se ejecuta el codigo de la segunda condicion, si la clave es incorrecta se ejecuta el codigo de la segunda condicion.

const password = 'edward123';
if(password !== 'edward123') {
    console.log('la contraseña es incorrecta, intente de nuevo');
} else {
    console.log('la contraseña es correcta');
}//esto  !== es si es diferente, es decir en el if estamos diciendo que si es diferente del pasword real diga que la contraseña es incorrecta, pero si no es diferente en el else imprime que la contraseña es correcta


//MAYOR QUE Y MENOR QUE ><

const efectivo = 1000;
const carrito = 800;
if(efectivo > carrito) {
    console.log('Se puede comprar');
} else {
    console.log('Saldo insuficiente');
} 

//REVISAR MAS DE UNA CONDICION
const rol = 'editor';
if(rol === 'admin') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'editor') {
    console.log('Acceso a todo el sistema, sin moificar parametros');
} else {
    console.log('Acceso restringido');
} //no es util cuando y ahay mas de 3 o 4 else if 
