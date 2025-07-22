//METODOS DE ¨PROPIEDAD sin funciones pero con sintaxis de metodo

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function() {
        console.log('Pausando la canción');
    },
    crearPLaylist: function(playlist) {
        console.log('Creando la playlist: ${playlist}') ;
    }
};




reproductor.borrarCancion = function(id) {
    console.log(`Borrando canción con el id: ${id}`) 
    
}//se pueden agrtegar propiedades por dentro y por fuera del objeto, es decir, se puede agregar una propiedad al objeto reproductor fuera de la declaracion del objeto, como en este caso, donde se agrega la propiedad borrarCancion al objeto reproductor, que es una funcion que recibe un id y lo imprime en la consola. 

reproductor.reproducir(123); //llama al metodo reproducir del objeto reproductor, pasando el id 123 como argumento, es decir, imprime en la consola "Reproduciendo canción con el id: 123"
reproductor.pausar(); //llama al metodo pausar del objeto reproductor, es decir, imprime en la consola "Pausando la canción"
reproductor.borrarCancion(10); //llama al metodo borrarCancion del objeto reproductor, pasando el id 123 como argumento, es decir, imprime en la consola "Borrando canción con el id: 123"
reproductor.crearPLaylist('Mi Playlist'); //llama al metodo crearPLaylist del objeto reproductor, pasando el nombre de la playlist como argumento, es decir, imprime en la consola "Creando la playlist: Mi Playlist"
