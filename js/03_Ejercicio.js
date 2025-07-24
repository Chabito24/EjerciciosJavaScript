/*

Ejercicio sobre const

1. Declara tres constantes de tipo string, número y booleano y descríbelas en consola.

2. Explica qué sucede si intentas declarar una constante sin asignarle un valor inicial.

3. Intenta reasignar el valor de una constante y observa el error que obtienes en consola. Describe el mensaje de error.

4. Declara varias constantes en una sola línea con valores distintos y confirma sus valores en consola.

5. Explica con tus palabras cuándo usarías const en lugar de let en un proyecto real.

*/

// Respuestas

// 1. 

const nombreRestaurante = 'Empanados',
      numeroLocal = 406,
      abierto = true;

console.log(`El restaurante se llama ${nombreRestaurante}, se encuentra en el local numero ${numeroLocal}, y esta abierto ${abierto}`);

//2. 

//const nombreChef =  ; al crear la variable y no asignarle ningun tipo de valor s genera un error enconsola independientemente de que esta o se realice un console.log el error mencionado es un Uncaught SyntaxError: expected expresión, di click en saber mas y dice que JS espera se asigne una expresion a esa variable llamada const por lo cual genera un error de sintaxis y se soluciona agregando una expresion "valor" a esa variable, la dejo comentada para que no me muestre el error en consola.

// 3.

//nombreRestaurante = 'Empanhadas'; se genera el siguiente error en consola Uncaught TypeError: invalid assignment to const 'nombreRestaurante'adicionalmnte me informa la linea donde se genera el error que para este caso es la numero 33, por ptroo lado al ver el error en la ayuda que me da el navegador me informa que se genero un tipo de error de asignación que informa que el valor de una constante no puede ser alterado, es decir que no se puede cambiar atravez de una reasignación y por ende no se puede volver a declarar, esto generaria una proclamacioninvalida de la variable, en este caso lo mejor si se requiere reasiganar un valo lo mejor es usar let o si se quiere mantener constt, cambiar el nombre de la variable en este caso nombreRestarante2, explica mas cosas pero creo que es lo fundamental sobre el error, tambien lo dejo comentado para evitar el error en consola

// 4. ya lo hice en el punto 1 no creo que deba hacrlo nuevamente ya es claro para mi

// 5. cost cuando no quiero cambiar el valor asignado a una variable y como tu dices esta e suna constante que representa un unico valor, esto debe ser un estandar en proyectos reales ya que s importante no cambiar los valores de una costante para poder identificar el origen real de una variable y evitar quela reasignacion de esa misma variable pueda afectar mas codigo que tiene esa variable relacionada, ejemplo el nombre de un producto no puedo reasignarle el valor por quel nombre siempre sera el mismo, o por ejemplo mas delicado una variable que este almanenando una historia clinica de un paciente y se altere seria algo delicado, no conozco aun mucho del alcance pero creo que seria algo que podria alterar la tranquilidad y estabilidad dela información.