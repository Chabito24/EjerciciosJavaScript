const carrito = [
    {nombre: 'llaves', precio: 500},
    {nombre: 'llaveros', precio: 1700},
    {nombre: 'cerraduras', precio: 300000},
    {nombre: 'chapas', precio: 200000},
    {nombre: 'guardas', precio: 50000},
    {nombre: 'pikaporte', precio: 25000}
];

//for loop
for (let i = 0; i < carrito.length; i++) {
    console.log("for ", carrito[i].nombre); //se usa .nombre para mostrar unicamente el nombre de los productos
}

//while loop
let h = 0;
while(h < carrito.length) {
    if(carrito[h].precio > 10000) {
        console.log("while loop ", carrito[h].nombre);
    }
    h++;
}//este es un ejercicio que me permite recorrer un arreglo de objetos y acceder a sus propiedades, en este caso accedo a la propiedad nombre de cada objeto del arreglo carrito usando un while loop

//do while loop
let f = 0;
do {
    const precio = carrito.reduce((acumulador, producto) => acumulador + producto.precio,0);
    if ( precio > 500000) {
        console.log("la suma de los productos es mayor a 500000, su total es de $", precio);
    }
    f++;
} while(f < 10); //este es un ejercicio que me permite recorrer un arreglo de objetos y acceder a sus propiedades, en este caso accedo a la propiedad nombre de cada objeto del arreglo carrito usando un do while loop

//forEach
carrito.forEach((articulo) =>{
    console.log("forEach ", articulo.nombre);
}); //forEach recorre el arreglo carrito y ejecuta la funcion por cada elemento del arreglo, donde articulo es el elemento actual, en este caso accedo a la propiedad nombre de cada objeto del arreglo carrito usando forEach, tambien segun el ejerccio se puede acceder a la propiedad de precio o quitar el .nombre o el.precio y me muestra toda la informacion de los productos del carrito.



//filter
const filtros = carrito.filter((productos) => productos.precio > 100000
); 
console.log("Productos filtrados con precio mayor a 100000:", filtros); // filter crea un nuevo arreglo con los elementos que cumplen la condicion especificada en la funcion, en este caso, filtra los productos con precio mayor a 100000 y retorna un nuevo arreglo con esos productos.

//reduce
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("El total a pagar es: $" + total); // reduce aplica una funcion a cada elemento del arreglo, acumulando un resultado final, en este caso, suma los precios de todos los productos del carrito y retorna el total.