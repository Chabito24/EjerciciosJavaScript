//NUMEROS Y OPERADORES

const numero1 = 100; //se reflejan en la consola de color morado o azul 
const numero2 = 200;
const numero3 = 200.20;
const numero4 = -5; //todos los numero los muestra igual sean decimales o negativos no importa

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);

//Operaciones

console.log(numero1 + numero2); //me permite validar la suma de dos numeros, en consola me mostrara el numero 300

console.log(numero2 - numero1); //-Nuevamente en consola me muestra el resultado que seria igual al numero 100

console.log(numero2 * numero1); //igual miuestra en consola el resultado de la operación 20000

console.log(numero2 / numero1); //respuesta en consola es 2



//MODULO, IMPORTANTE forma parte de las entrevistas de trabajo

const numero5 = 7;
const numero6 = 6;


console.log(numero5 % numero6); //lo que hace es una division y muestra el residuo de la misma, es decir 1

//SUENA LOGICO PERO NO SE PUEDEN HACER OPERACIONES ENTRE STRING, GENMNERARA UN EROR LLAMADO NoN = Not A Numbre


//OPERACIONES ENTRE STRING Y NUMEROS "EJEMPLOS PERSONALES"
//esto es un error que se comete mucho, ya que al ser un string no se puede realizar operaciones matematicas, por lo tanto se debe tener cuidado al momento de asignar valores a las variables, ya que si se asigna un string y luego se intenta hacer una operacion con un numero, generara un error o simplemente no realizara la operacion como se espera
//por ejemplo:

const a = "100";
const b = 50;

console.log(a + b);    // ¿Qué crees que imprime? imprime 10050, ya que al ser un string concatena el numero 50 al string 100, por lo tanto no hace la operacion de suma, sino que concatena los dos valores
console.log(Number(a) + b);    // esto permite que el string pase a ser umero y se pueda realizar la operacion a diferencia de con console.log(a + b);
console.log(a - b);    // hace la operacion de resta y muestra el resultado 50
console.log(a * b);    // hace la operacion de multiplicacion y muestra el resultado 5000
console.log(a / b);    // hace la operacion de division y muestra el resultado 2


