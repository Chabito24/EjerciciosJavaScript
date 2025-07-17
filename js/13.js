// Unir dos objetos con el Spread Operator

const producto = {
    nombreProducto : 'Monitor 30 pulgadas',
    precio : 700000,
    disponible : true,
}

const medidas = {
    peso : '1kg',
    alto : '1m',
    ancho : '2m',
}

// se recomienda no modificar las propiedades de ninguno de los objetos que se van a unir.

const newProduct = { ...producto, ...medidas}; //se crea una nueva variable con una sintaxis de objeto ene ste caso la nueva variable se va a llamar newProduct segido signo de igual y llaves tres puntos el nombre del primer objeto, despues coma, despues nuevamente tres puntos y elo nombre del segundo objeto

console.log(producto); //muestra las propiedades de solo el producto
console.log(medidas); //nuestra solo las propiedades de medidas
console.log(newProduct); //muestra las propiedades de producto mas las propiedades de medidas

