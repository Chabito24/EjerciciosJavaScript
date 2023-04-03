//CONTROLAR EL ORDEN DE LAS OPERACIONES

let resultado;

resultado = 20 + 30 * 2; //se resuelven por el peso del signo es decir primero multiplicaciones y divisiones y posteriormente sumas y rerstas

resultado = (20 + 30) * 2; //pero si queremos controlar el orden de las mismas pordemos agregar parentesis esto resuelve primero los parentesis y luego hace la operacion faltante

resultado = (100 + 200 + 300) * 1.2; //muestra el 20% de la operacion

console.log(resultado); //para el primer ejercicio nos da 80 y para el segundo 100



//  INCREMENTOS

let puntaje = 10;

puntaje++; //este ++ me incrementa el puntaje en 1 es decir la consola ya no debe mostrar 10 sino el numero 11

puntaje--; //decrece el puntaje en 1 es decir aqui la consola me debe mostrar nuevamente 10

puntaje+= 10; //incrementa el puntaje en 10, es decir, el puntaje en consola debe ser de 20

puntaje-= 10; //decrece igual en 10 es decir vuelve a su valor original en consola de 10 

console.log(puntaje);