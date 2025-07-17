//ARRAYS - arreglos, los objetos se crean con llaves y los arreglos con corchetes, ver ejercicio a continuación:

const numeros = [10,20,30,40,50]; //esta es la mas usada

console.log(numeros); //imprime los valores como les venimos viendo hasta ahora

console.table(numeros);//me meustra la informacion pero en una tabla, ver consola


//Ejemplo 2: tambien se peude crear con el constructor con la siguiente sintaxis de acontinuacion:

//const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'); se utiliza mas la anterior que esta, es decir sin el constructor de new array

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

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


//METODOS PARA LOS ARRAYS - VIDEO119

//agregar nuevos elementos

numeros[5] = 60;//agrega un nuevo indice con un valor en este caso indice numero 5 con el valor 60
numeros[6] =70; //hace lo mismo que el anterior

console.table(numeros); //veremos en consola que ahora en la tabla me agrego un valor en este caso en el indice numero 5 el valor numero 60 y en el indice 6 el valor de 70 tal cual como se indico en  el codigo anterior ARREGLO DE "numeros", se debe conocer el indice en el cualse va a incluir el nuevo arreglo, si no se conoce el indice se puede usar el metodo push que es mas sencillo y no requiere de conocer el indice en el cual se va a agregar el nuevo elemento

//agregar un elemento sin indicar el indice push

numeros.push(80,90,100); //me agrega el nuevo elemento al final en este caso en el indice 7 ya que teniamos solo del 0 al 6 de indice, siempre lo agrega al final el.push,se separa por coma la cantidad de valores que se van a agregar, si no se coloca nada dentro del parentesis no agrega nada, si se coloca un valor lo agrega al final del arreglo. RECOMENDACION: NO SE RECOMIENDA MODIFICAR LOS DATOS ORIGINALES DE UN ARREGLO, es mejor crear un nuevo arreglo con los valores que se necesitan modificar o agregar.
console.table(numeros);


//agregar elementos al inicio de la lista

numeros.unshift(-10,-20,-30,-40); //al ver la consola veremos que nos agrego estos elementos al inicio
console.table(numeros);

//modificar un elemento

numeros[2] = 29; //esto me modifico el valor del elemento al verificar la tabla nuevamente veremos que el valor del indice 2 ya no es 30 como en el arreglo inicial sino que ahora es de 29 ver consola

console.table(numeros);

//Eliminar elementos de un arreglo

meses.pop(); //si lo dejamos asi sin valor me elimina el ultimo elemento, en este caso del arreglo llamado meses, es decir al ver la consola no debe mostrar el mes de Diciembre
console.table(meses);

meses.shift(); //elimimna el primer elemento del arreglo, ya no debe mostrar enero
console.table(meses);


//eliminar un elemento intermedio
meses.splice(2, 1);//el primer valor toma el indica que va a eliminar y el segundo valor cuantos elementos se van a eli¿misr apartir de se indice como solo quiero elimnar el indice 2 dejo el numero 1 despues del indice ya que no quiero eliminar mas elementos, es decir en el indice 2 estaba abrik, al ver la consola con el console.table o console.log no debe aparecer ese mes
console.table(meses);


//DESVENTAJAS: las desventajas de todos estos metodos es que modifican los valores originales del arreglo, es mejor siempre mantener el arreglo con los valores originales y en cambio para hacer alguna modificación crear un nuevo arreglo donde incluya el cambio que necesitamos realizar.


//REST OPERATOR O SPREAD OPERATOR

const nuevoArreglo = [...meses, 'Eneriembre']; // crea el nuevo arreglo, usa el rest operator copiando los datos del arreglo mese sy agrega un nuevo mes que me invente llamado eneriembre, vemoslo en la consola -- ES EQUIVALENTE AL PUSH UN POCO MAS DE CODIGO PERO ES LA MANERA MAS ACERTADA DE HACERLO, si queremos que incorpore el cambio al inicio invertirlo de la siguiente manera en el codigo: const nuevoArreglo = ['Eneriembre', ...meses] esto invierte el orden

console.table(nuevoArreglo);



