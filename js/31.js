

const boton = document.querySelector('#boton'); // srea una variable llamada boton la cual por medio de document.querySelector llamo un ID asignado a una etiqueta en el HTML

boton.addEventListener('click', () => { // 'click' es un evento predefiido que se disparacuando doy click sobre el elemento
    Notification.requestPermission() // retorna un una new promise que ya tiene imploicito re resolve y el reject por ello mas abajo puedo usar el .then
        .then(resultado => console.log(`Resultado:${resultado}` ) ) // aqui solicito el resultado y por medio de un arrow funcion imprimo en consola ese resultado
})


if(Notification.permission === 'granted') { // condicional que valida el permiso, solicitado. si es granted, denied o default 
    new Notification ('Esta es una notificacion de', {
        icon: 'favicon.ico',
        body: 'Edward Martinez developer'
    }) // si cumple la promesa validando el permiso solicitado me genera una nueva notificacion en este ejercicio con un mensaje, una imagen y un mensaje en el cuerpo de la misma notificaición. 
}

