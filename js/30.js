// Promises

const usuarioAutenticado = new Promise((resolve, reject) => { //se hace una promesa een JS
    const auth = true; // se crea una variable para validar si el usuario esta o no autenticado por medio de un booleano

    if(auth) {
        resolve('Usuario autenticado'); //el promise se cumple
    } else {
        reject('Error en el inicio de sesión'); //el promise no se cumple
    }

});

console.log(usuarioAutenticado); //como en auth es = a true nos imprimira fulfilled


/* Valores en los promise

 1. pending: No se ha cumplido pero tampoco se ha rechazado
 2. fulfilled: Ya se cumplio
 3. rejected: Se ha rechazado o no se pudo cumplir

*/