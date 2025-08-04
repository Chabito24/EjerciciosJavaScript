// Async / Await

function descargaNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes......Espere.'); // se crea una funcion que retorna una promesa que dice descargando clientes... espere, 

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    }); // para simular la espera creamos un setTimeout el cual evalua el resultado e indica despues de 5 segundos (5000 milisegundos) el mensaje los clientes fiueron descargados
}

async function app() { // async genera que en este caso la funcion sea asincrona, es decir no sabemsos si la funcion que en este caso es que se ejecuten los clientes se descargien o no pero independientemente de ellos queremos que la aplicaicon siga funcionando para ello aplicamos try catch
    try {
        const resultado = await descargaNuevosClientes(); // await, permite indicar cual es el promise que se debe cumplir a falta de que no podemos incluir un .then en un async
        console.log('este codigo se bloquea') //se bloquea hasta que se ejecute la funcion anterior
        console.log(resultado);
    } catch (error) {
        console.log(error)     
    }
    
} // aplicamos un async con una funcion que ejecute n try catch para queindependientemente del resultado lkas demas lineas de codigo dse gigan ejecutando sin problema 

app();//mandamos llamar la funcion

console.log('este codigo no se bloquea') // no se bloquea independiente de si se cumple o no la funcion previa