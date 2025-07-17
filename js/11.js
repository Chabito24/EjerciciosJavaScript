//DESTRUCTURING DE OBJETOS

const producto = {
    nombreProducto : 'Monitor 30 pulgadas',
    precio : 700000,
    disponible : true,
}

//forma anterior
const precioProducto = producto.precio //aqui extraigo el valor de la propiedad precio del objeto producto y lo guardo en una variable llamada precioProducto
//console.log(producto.precio); //aqui me refleja el valor de la propiedad precio
console.log("precio",precioProducto); //aqui me refleja el valor de la variable en este caso loe 700000 en la consola


//nueva forma - destructuring de objetos

const {precio} = producto;
console.log(precio);

//aqui en esta extraigo la propiedad  precio del objeto producto, la propiedad debe ir en llaves, esto lo que hace es que inmediatamente crea la variable con el mismo nopmbre llamado precio y al llamrlo a consola me extrae el valor de ese precio en este caso debe monstrar 700000, es decir etrae la propiedad, crea la variable y extrae el valor en un solo paso


//ejemplo con el nombre del producto usando destructuring

const {disponible, nombreProducto} = producto; //usamos una coma para extraer dos o mas propiedades y crear enconsecuencia dos variqables para posteriormente imprimirlas en consola conconsole.log
console.log(disponible);
console.log(nombreProducto); 