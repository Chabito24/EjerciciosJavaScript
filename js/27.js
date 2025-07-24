//Object constructor y Object literal POO

//Object literal

const producto = {
    categoria: 'caninos',
    nombre: 'collar',
    precio: 35000
}

// Object Constructor

function Producto(categoria, nombre, precio, disponible) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
} //formula con la cual se pueden almacenar multiples objetos se asigna function seguido de un nombre para a funcion y entre parentesis los parametros que va a contener los objetos

const producto2 = new Producto('caninos', 'pechera', 55000, true);
const producto3 = new Producto('caninos', 'pelota', 15000, false);
const producto4 = new Producto('felinos', 'rascador', 150000, true);

console.log("objetos construidos con object literal");
console.log(producto);
console.log("objetos construidos con object constructor");
console.log(producto2);
console.log(producto3);
console.log(producto4.disponible);// aqui use una propiedad del objeto para traer en consola solo la disponibilidad del producto
