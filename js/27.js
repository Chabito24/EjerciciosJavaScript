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
    this.disponible = true;
} //formula con la cual se pueden almacenar multiples objetos se asigna function seguido de un nombre para a funcion y entre parentesis los parametros que va a contener los objetos

const producto2 = new Producto('caninos', 'pechera', 55000);
const producto3 = new Producto('caninos', 'pelota', 15000);
const producto4 = new Producto('felinos', 'rascador', 150000);
const producto5 = new Producto();

console.log("objetos construidos con object literal");
console.log(producto);
console.log("objetos construidos con object constructor");
console.log(producto2);
console.log(producto3);
console.log(producto4.disponible);// aqui use una propiedad del objeto para traer en consola solo la disponibilidad del producto
console.log(producto5); //imprime en consola un objeto vacio, bueno ssolo imprime el true por que esta definido se vaor directo a cada producto nuevo.


//PROTOTYPES

function FormatearProducto(producto) {
    return `function: El producto ${producto.nombre} tiene un precio de $ ${producto.precio}`;

}

console.log( FormatearProducto(producto4)); // el problema de crear este tipo de unciones es que me va a ocar crear una por cada objeto, es decir, por ejemplo si tengoo tro objeto llamado cliente, otro llamado proveedores, otro llamado bodegas, otro llamado gastos, por cada uno me toca crear una funcion, por ello se creo algo llamado PROTOTYPES.

// Prototype noes permite crear funcio0nes que solo se utilizan en un objeto en especifico.

Producto.prototype.FormatearProducto = function() { // iniciamos con el nombre de la funcion coon la que inicializacos el consturctor en este caso "Producto" seguido de punto y luego la palabra prototype
    return `Prototype: El producto ${this.nombre} tiene un precio de $ ${this.precio}`; // generamos con un return solo en este ejemplo un temnplate literal con los datos del producto pero esta vez usamos el ${this.xxxxx} 
}
console.log(producto3.FormatearProducto()); // en el console.log llamamoms en este caso el producto seguido de punto el nombre de la funcion  y entre paarentesis ya no es necesario llamar parametros.


// lo anterior nos permite primero evitar escribir tntos function, segundo, permite que solo se utilice para la clase que se requiere, si lo usamos en otra clase se generara un error en consola.



