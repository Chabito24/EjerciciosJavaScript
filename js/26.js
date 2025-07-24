//this

const reservacion = {
    nombre: "Edward",
    apellido: "Martínez",
    total: 5000,
    pagado: false,
    informacion: function() { 
        console.log(`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
} //me permite crear un objeto con propiedades y valores, en este caso, un objeto que representa una reservacion con las propiedades nombre, apellido, total y pagado

console.log(reservacion.nombre); //imprime el valor de la propiedad nombre del objeto reservacion, es decir, imprime "Edward" en la consola
console.log(reservacion.apellido); //imprime el valor de la propiedad apellido del objeto reservacion, es decir, imprime "Martínez" en la consola
console.log(reservacion.total); //imprime el valor de la propiedad total del objeto reserv

//lo que podemos ahacer es acceder a cualquiera de sus propiedades como nombre, apellido, total o pagado

console.log(reservacion.informacion()); //llama a la funcion informacion del objeto reservacion, que imprime un mensaje con el nombre y el total de la reservacion en la consola
//tambien puedo acceder a la funcion informacion del objeto reservacion y llamarla para que impr

//normalmente usariamos ${reservacion.nombre} para acceder a la propiedad nombre del objeto reservacion, pero en este caso usamos this.nombre porque estamos dentro de la funcion informacion y queremos acceder a la propiedad nombre del objeto reservacion usando el contexto de this, que se refiere al objeto actual y lo mismo aplica para this.total, que es equivalente a reservacion.total

//eso evita que estemos escribiendo el nombre de la variable para llamar la popiedad del objeto, ejemplo podriamos tener dos objetos uno llamado resrvacion y otro reservacion2 si usaramos ${reservacion.nombre} tendriamos que escribir reservacion.nombre y reservacion2.nombre, pero si usamos this.nombre solo tenemos que escribir this.nombre y this.nombre, lo que hace el codigo mas limpio y facil de leer


//IMPORTANTE, no funciona con arrow funcions, ya que las arrow functions no tienen su propio contexto de this, por lo que no se puede acceder a las propiedades del objeto usando this dentro de una arrow function. En este caso, se debe usar una funcion normal para poder acceder a las propiedades del objeto usando this, si se hace con arrow function va a imprimir en consola un uindefined, 
