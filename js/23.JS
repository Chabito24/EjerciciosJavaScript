// SWITCH

const metodoDePago = 'cheque';
switch (metodoDePago) {
    case 'tarjeta':
        console.log('El pago se realizo con tarjeta');
        break; //break ejecuta todo el codigo que esta despues de los dos puntos hasta el break, es decir, si el metodo de pago es tarjeta se ejecuta el codigo dentro del case tarjeta y luego se sale del switch, si no se pone break se ejecutaria todo el codigo de los siguientes cases hasta que encuentre un break o termine el switch, por lo tanto es importante poner break al final de cada case para evitar que se ejecute el codigo de los siguientes cases.
    case 'efectivo':
        console.log('El pago se realizo en efectivo');
        break; //si el metodo de pago es efectivo se ejecuta el codigo dentro del case efectivo y luego se sale del switch
    case 'nequi':
        console.log('El pago se realizo con nequi');
        break; //si el metodo de pago es nequi se ejecuta el codigo dentro del
    case 'cheque':
        console.log('El pago se realizo con cheque, se revisaran los fondos y posteriormente se realizara en envío');
        break; //si el metodo de pago es cheque se ejecuta el codigo dentro del case cheque y luego se sale del switch
    default:
            console.log('Metodo de pago no valido');
            break; //default se ejecuta si ninguno de los cases coincide con el valor de la

        
}