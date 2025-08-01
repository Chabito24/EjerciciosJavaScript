const verificarConexion = new Promise((establecido, rechazado) => { 
    const conexion = false; 

    if(conexion) {
        establecido('Conexión establecida con éxito');
    } else {
        rechazado('Error: No hay conexión a internet'); 
    }

});

console.log(verificarConexion);

verificarConexion
    .then( function(resultado) {
        console.log(resultado);
    })
    .catch( function(error) {
        console.log(error)
    });