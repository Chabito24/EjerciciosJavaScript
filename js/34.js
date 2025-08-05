//Fetch API (promises)

function obtenerEmpleados() { // Creamos una funcion

    const archivo = 'empleados.json'; // creamos una variable  relacionando el nombre del archivo .json, normalmente seria una URL

    fetch(archivo) // creamos fetch relacionando como parametro la variable archivo
        .then( resultado => { /// .then llamando el resultado y con un arrow function retornamos el resultado por medio de un .json
            return resultado.json();
        })
        .then( datos => {
            //console.log(datos.empleados);
            const {empleados} = datos;
            //console.log(empleados); //aplicamos destructuring extraemmos el valor y creamos la variable en el mismo paso
            empleados.forEach ( empleado => {
                console.log(empleado);
                /*console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.cargo);*/
            })
        }) // un nuevo.then llamando los datos para que los muestre en este caso en consola
        .catch(error => {
            console.error('error al obtener los datos', error);
        })//Se crea un console.error para generar un error cuando no encuentra en este caso el archivo asignado a la variable archivo.
}

obtenerEmpleados(); //llamamos la funcion