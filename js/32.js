// Async - Await

function descargaNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes......Espere.');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app() {
    try {
        const resultado = await descargaNuevosClientes();
        console.log('este codigo se bloquea') //se bloquea hasta que se ejecute la funcion anterior
        console.log(resultado);
    } catch (error) {
        console.log(error)     
    }
    
}

app();

console.log('este codigo no se bloquea') // no se bloquea independiente de si se cumple o no la funcion previa