//BOOLEANS

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1); //muestra el true
console.log(boolean2); //muestra el false
console.log(boolean3); //muestra el string "true", no es un booleano, es un string

console.log(typeof boolean1); //muestra boolean, typeof muestra el tipo de dato
console.log(typeof boolean2); //muestra boolean
console.log(typeof boolean3); //muestra string


//foorma de crearlos aunque casi no se usa, mejor usar la de arriba
const boolean4 = new Boolean(true);
console.log(typeof boolean4);// muestra object, ya que es un objeto y no un booleano
