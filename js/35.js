// Fetch API - async/await

async function obtenerEmpleados() {

    const archivo = 'empleados.json';
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

    
}

obtenerEmpleados();