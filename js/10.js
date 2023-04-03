//OBJETOS

const nombreProducto = 'Monitor 20 pulgadas';
const precio = 700000;
const disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);

//gracias a la creacion de objetos puedo pasar de crear esas tres variables anteriores a hacerlo en una sola qu econtenga los 3 valores


const producto = {
    nombreProducto : 'Monitor 30 pulgadas',
    precio : 700000,
    disponible : true,
}

console.log(producto); //se puede ver la diferencia cuando se muestra en cosola me muestra los 3 valores y ademas me infica que es un objeto

//sintaxis de punto

console.log(producto.disponible); // puedo ver en consola unicamente el valor asociado a una de las variables en este caso si esta o no 


//otro tipo de sintaxis

console.log(producto['precio']) //es otra forma de llamar el valor de una sola variable se puede usar cualquiera de las dos


//VIDEO 114


//MODIFICAR UN OBJETO

producto.imagen = 'imagen.jpg'; //aqui agregamos informacion al producto y lo podemos ver en la consola
console.log(producto); 

delete producto.disponible;// aqui eliminamos la propiedad disponible
console.log(producto);

//NOTA IMPORTANTE tener en cuenta que en todos los console.log me arrastra la misma informacion cuando estoy agregando o quitando propiedades,  por tanto para que salga los valores correspondientes eliminas o comentar las otras lineas de codigo de modificacion del objeto.