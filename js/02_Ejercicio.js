/* 

Ejercicio sobre let


1. Declara tres variables usando let (una string, una numérica y una booleana) y cambia sus valores por otros de tipo diferente.

2. Explica qué pasa si intentas declarar dos veces la misma variable con let dentro del mismo bloque.

3. Declara varias variables en una sola línea usando let y verifica que puedas imprimirlas correctamente.

4. ¿Qué diferencia notas entre declarar variables con var y con let respecto al alcance (scope) dentro de un bloque { }?

5. Crea una variable con nombre compuesto aplicando el estilo camelCase y describe por qué elegiste ese nombre.

*/

// 1. Declara tres variables usando let (una string, una numérica y una booleana) y cambia sus valores por otros de tipo diferente.

let producto = 'Teclado'; // tipo string
let precio = 150; // tipo numérico
let disponible = true; // tipo booleano

console.log(`Producto: ${producto}, Precio: $${precio}, Disponible: ${disponible}`); // Imprime las variables iniciales

producto = 'Mouse'; // cambiando a otro string
precio = 200; // cambiando a otro número 
disponible = false; // cambiando a otro booleano

console.log(`Producto: ${producto}, Precio: $${precio}, Disponible: ${disponible}`); // Imprime las variables modificadas

// 2. Explica qué pasa si intentas declarar dos veces la misma variable con let dentro del mismo bloque,

//Esto causará un error porque 'producto' ya ha sido declarada con let en el mismo bloque, es decir no se puede declrara la misma variable dos vces en el mismo bloque con let.

//3. Declara varias variables en una sola línea usando let y verifica que puedas imprimirlas correctamente.

let marca = 'Logitech',
    modelo = 'G502',
    color = 'negro';

console.log(`marca: ${marca}, modelo: ${modelo}, color: ${color}`)

// 4. ¿Qué diferencia notas entre declarar variables con var y con let respecto al alcance (scope) dentro de un bloque { }?

//lesta si me la pusiste dura pero es que realmentye no veo diferencia entre let y var para mi tienen el mismo alcance con const si hy diferencia pero si me das una mano en esta explicandome el porque te agradeceria.

// 5. Crea una variable con nombre compuesto aplicando el estilo camelCase y describe por qué elegiste ese nombre.

let categoriaProducto = 'computadoras';
//elegi ese nombre por que ya tenia las demas caracteristicas dle producto como nombre, marca, modelo, color, precio, pero es importante que los productos en un inventario tambien pertenezcan a una categoria.