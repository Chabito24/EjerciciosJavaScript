// CLASS

class Producto { //Se crea la clase con la palabra reservada class, seguido del nombre de la clase
    constructor(categoria,nombre,precio){ // dentro generamos un constructor con los parametros del constructor entre parentesis 
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio; // entre las llaves del constructosr asignamos los this de cada uno de los parametros disponiblers para cada producto que vayamos a instanciar posteriormente
    }
    formatearProducto() { // creamos un metodo que me retorme el nombre y el precio del producto con template literal
        return `El producto ${this.nombre} pertenece a la categoria ${this.categoria}`;
    }
    formateaCategoria () {
        console.log(this.categoria);
    }
}

const producto2 = new Producto('caninos', 'pechera', 55000);
const producto3 = new Producto('caninos', 'pelota', 15000); // instanciamos los productos nuevos con sus respectivos datos asociados a cada parametro definico en el constructor

console.log(producto2); // imprime producto 2
console.log(producto3); // imprime producto 3
console.log(producto3.formatearProducto()) // imprime el metodo del retorno de el formateo del pfoducto
console.log(producto2.formateaCategoria()) // imprime el metodo del formateo de la categoría.


//HERENCIA

class Libro extends Producto { // Creo una nueva clase  llamada Libro, pero a esta nueva clase por medio de la palabra extends heredo valores de la clase llamada Producto, 
    constructor(categoria, nombre, isbn){ // creamos el constructor para la nueva clase y los valores qe van a contener
        super(categoria, nombre ); //por medio de super indicamos los valores que vamos a heredar de Producto, para este ejemplo, la categoria y el nombre
        this.isbn = isbn; // creamos el this unicamente para los valores que no esstamos heredando de la clase padre
    }
    formatearProducto() { // reescribimos el metodo que venia de producto e incluimos el ISBN 
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`; //agregamos super y nos trael el texto ya asignado al metodo creado en producto y luego asignamos el texto que va a imprimir su ISBN
    }
    formateaCategoria() {
        super.formateaCategoria();
        console.log('hay libros en existencia')
    }
}

const libro1 = new Libro('novela','El arte de la guerra', 'isbn123b');

console.log(libro1.formatearProducto()); // imprimimos el metodo de producto con el nombre de la variable de libro 1 y me trae el metodo con los datos asignados al libro

console.log(libro1.formateaCategoria());