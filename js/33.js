// ejecutar dos o mas - Async / Await 

//IMPORTANTE PREGUNTA ENTREVISTA

function descargaNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes......Espere.'); 

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    }); 
}

function descargaNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos......Espere.'); 

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    }); 
}

function descargarFacturas() {
    return new Promise( resolve => {
        console.log('Descargando facturas......Espere');

        setTimeout( () => {
            resolve('Las facturas fueron descargadas');
        }, 2000);
    });
}

async function app() { 
    try {
        const resultado = await Promise.all([descargaNuevosClientes(), descargaNuevosPedidos(), descargarFacturas()]); //De est amanera obtenemos un arreglo por cada funcion
        console.log(resultado[0]); //imprimimos el arreglo por su indice en este caso indice [0] y abajo indice [1]
        console.log(resultado[1]);
        console.log(resultado[2]);
    } catch (error) {
        console.log(error)     
    }
    
} 

app(); 

// clientes tarda 5 seg y pedidos 3 seg, pero los 3 segundos de los pedidos eta dentro del rango de los 5 de los clientes asi podemos llamar multiples async away sin que uno sea dependiente de otro para que sean dependientes simplemente reemplazamos el await de la siguiente manera

/*

async function app() { 
    try {
        const clientes = await descargaNuevosClientes();
        const pedidos = await descargaNuevosPedidos();
        console.log(clientes);
        console.log(pedidos);
    } catch (error) {
        console.log(error)     
    }
    
} 

*/

// de esta manera son dependientes y una nos e ejecuta hasta que la anterior se ejecute.

// se incluye un tercer elemento com objeto llamado descargarFacturas ahora en consola muestra el mensaje descargando, y la descarga final simulada con el setTimeout de cada elemento.