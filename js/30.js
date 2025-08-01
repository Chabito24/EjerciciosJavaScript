// Promises

const usuarioAutenticado = new Promise((resolve, reject) => { //se hace una promesa een JS, cabe aclarar que los parametros resolve y reject pueden tomar mal valor 
    const auth = true; // se crea una variable para validar si el usuario esta o no autenticado por medio de un booleano

    if(auth) {
        resolve('Usuario autenticado'); //el promise se cumple
    } else {
        reject('Error en el inicio de sesión'); //el promise no se cumple
    }

});

console.log(usuarioAutenticado); //como en auth es = a true nos imprimira fulfilled, para que aparezcala obcion de reject en auth devberia ser = a false, y el pending aparece cuando se elimina el If y el else


/* Valores en los promise

 1. pending: No se ha cumplido pero tampoco se ha rechazado
 2. fulfilled: Ya se cumplio
 3. rejected: Se ha rechazado o no se pudo cumplir

*/

usuarioAutenticado
    .then( function(resultado) {
        console.log(resultado);
    }) //usamos la variable usuarioAutenticado, con la funcion .then donde le colocamos un parametro llamado resultado y un console.log que nos imprima el resultado de la ejecucion del promise sea reject o resolve, por eso el mensaje que imprime depende del resultado del if o el else segun la simulacion de autenticacion del usuario.