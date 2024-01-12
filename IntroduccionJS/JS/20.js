// 126 - Métodos de Propiedad
"use stric";

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el ID ${id}`);
  },
  pausa: function () {
    console.log("En pausa");
  },
  crearPlayList: function (nombre) {
    console.log(`Playlist de ${nombre.toUpperCase()} creada`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`Playlist ${nombre.toUpperCase()} en reproducción`);
  },
};

// Creando un método por fuera del objeto
reproductor.borrarCancion = function (id) {
  console.log(`Borrando canción con el ID ${id}`);
};

reproductor.reproducir(180699);
reproductor.pausa();
reproductor.borrarCancion(20);
reproductor.crearPlayList("heavy metal")
reproductor.reproducirPlayList("pop")
