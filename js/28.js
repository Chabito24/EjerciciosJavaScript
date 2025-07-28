// CLASS

class Producto { //Se crea la clase con la palabra reservada class, seguido del nombre de la clase
    constructor(categoria,nombre,precio){ // dentro generamos un constructor con los parametros del constructor entre parentesis 
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio; // entre las llaves del constructosr asignamos los this de cada uno de los parametros disponiblers para cada producto que vayamos a instanciar posteriormente
    }
    formatearProducto() { // creamos un metodo que me retorme el nombre y el precio del producto con template literal
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }
    formateaCategoria () {
        return `El producto pertenece a la categoria de ${this.categoria}` // copmo ejercicio adicion un uevo metodo que me retorne la categoria de ese producto, cabe aclarar que todos estos metodos deben estar dentro de las llaves del constructor
    }
}

const producto2 = new Producto('caninos', 'pechera', 55000);
const producto3 = new Producto('caninos', 'pelota', 15000); // instanciamos los productos nuevos con sus respectivos datos asociados a cada parametro definico en el constructor

console.log(producto2); // imprime producto 2
console.log(producto3); // imprime producto 3
console.log(producto3.formatearProducto()) // imprime el metodo del retorno de el formateo del pfoducto
console.log(producto2.formateaCategoria()) // imprime el metodo del formateo de la categoría.