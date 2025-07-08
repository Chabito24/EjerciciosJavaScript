//el Objeto Math en JS

let resultado;

resultado = Math.PI; //muestra el valor de pi en la consola
console.log("PI",resultado); //muestra el valor de pi en la consola  

resultado = Math.round(7.8); //redondea al entero mas cercano en la consola deberia mostrar 8
console.log("Redondeo al numero mas cercano (7.8):",resultado); //muestra el valor redondeado en la consola 

resultado = Math.ceil(2.1); //redondea hacia arriba
console.log("Redondeo hacia arriba (2.1)",resultado);

resultado = Math.floor(2.9); //redondea hacia abajo
console.log("Redondeo hacia abajo (2.9)",resultado);

resultado = Math.sqrt(144); //raiz cuadrada
console.log("Raiz cuadrada (144)",resultado);

resultado = Math.abs(-200); //pasa un numero negativo a positivo
console.log("valor absoluto (-200)",resultado);

resultado = Math.min( 3, 5, 8, 1, 2, 10, -7 ); //nos retorna el numero mas pequeño dentro de una serie de numeros
console.log("Menosr de la lista",resultado);

resultado = Math.max( 3, 5, 8, 1, 2, 10, -7 ); //retorna en consola  el numero mas alto dentro del listado
console.log("Mayor de la lista",resultado);

resultado = Math.random() //genera un numero aleatorio por lo general inferior a 1
console.log("Numero aleatorio entre 0 y 1",resultado);

resultado = Math.floor( Math.random() * 30 ) // Aqui estoy mezclando o mejor uniendo funciones entre un mat floor para redondear la multilpicacion de un numero random por 30 y esto si me vba a dar un numero superior a 1 redondeado hacia abajo
console.log("Numero aleatorio entre 0 y 29",resultado);



//OTRAS FUNCIONES DEL OBJETO MATH
// Estas son algunas de las funciones más comunes del objeto Math en JavaScript:

//Redondeo y trucamiento

//Math.round(x)	Redondea al entero más cercano	round(4.5) → 5
//Math.ceil(x)	Redondea hacia arriba	ceil(4.1) → 5
//Math.floor(x)	Redondea hacia abajo	floor(4.9) → 4
//Math.trunc(x)	Elimina decimales (sin redondear)	trunc(4.9) → 4



// Valor y signo

//Math.abs(x)	Valor absoluto	abs(-10) → 10
//Math.sign(x)	Retorna -1, 0 o 1 según el signo	sign(-5) → -1



//Trigonometría (en radianes)

//Math.sin(x) → seno	sin(0) → 0
//Math.cos(x) → coseno	cos(0) → 1
//Math.tan(x) → tangente	tan(0) → 0
//Math.asin(x) → arco seno	asin(1) → 1.57
//Math.acos(x) → arco coseno	acos(1) → 0
//Math.atan(x) → arco tangente	atan(1) → 0.78
//Math.atan2(y, x) → ángulo de punto (y,x)	atan2(1, 1) → 0.78



//Exponenciales y logaritmos

//Math.pow(x, y)	Potencia	pow(2, 3) → 8
//Math.sqrt(x)	Raíz cuadrada	sqrt(9) → 3
//Math.cbrt(x)	Raíz cúbica	cbrt(27) → 3
//Math.exp(x)	e elevado a x	exp(1) → 2.71
//Math.expm1(x)	e^x - 1	expm1(1) → 1.71
//Math.log(x)	Logaritmo natural (base e)	log(10) → 2.3
//Math.log10(x)	Logaritmo base 10	log10(100) → 2
//Math.log2(x)	Logaritmo base 2	log2(8) → 3
//Math.log1p(x)	Logaritmo de 1 + x	log1p(1) → 0.69



//MAS FUNCOINES
//Al escribir en Console en el navegador la palabra Window puedo ver todas las funciones asignadas no solo a math si no a otras usadas en JS