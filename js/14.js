//ARRAYS - arreglos, los objetos se crean con llaves y los arreglos con corchetes, ver ejercicio a continuación:

const numeros = [10,20,30,40,50]; //esta es la mas usada

console.log(numeros); //imprime los valores como les venimos viendo hasta ahora

console.table(numeros);//me meustra la informacion pero en una tabla, ver consola


//Ejemplo 2: tambien se peude crear con el constructor con la siguiente sintaxis de acontinuacion:

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'); //se utiliza mas la anterior que esta

console.log(meses);
console.table(meses);

//Ejemplo 3: se pueuden incluir toda clase dde datos por ejemplo String, numeros, booleans, null, objetos e incluso tener otro arreglo


const arreglo = ['Hola', 10, true, null, {nombre: 'Edward', Cargo: 'desarrollador'}, [1,2,3]];

console.log(arreglo);
console.table(arreglo);


//COMO ACCEDER A LOS VALORES DE UN ARREGLO

console.log(arreglo[4]);
console.table(arreglo[4]); // en albos console debe mostrarme el valor del indice numero 4 que en este caso corresponde a un objeto dentro del arrego = nombre; Edward cargo: desarrollador



// CONOCER LA EXTENCION DE DATOS QUE TIENE UN ARREGLO

console.log(meses.length); //vamops a poder ver en cosola que nos va a mostrar los 12 datos que tiene el arreglo llamado meses.


//COMO ACCEDER A TODOS LOS VALORES DE UN MISMO ARREGLO PARA NO INGLRESAR A UNO POR UNO USAMOS:

numeros.forEach( function(numero) {
    console.log(numero);
}) //se usa la anterior sintaxis el nombre del arreglo seguido de punto y la palabraforEach entre parentecios la opcion function y dentro de parentesis el nombre por el cual queremos hacer la iteracion.