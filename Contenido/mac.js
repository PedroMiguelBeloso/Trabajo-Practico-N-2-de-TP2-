const fs = require("fs");
const path = require("path");

const rutaArchivo = path.join(__dirname, '..', 'package.json');
const salida = path.join(__dirname, 'info.txt');

/* 1er Callback
 Esta función lee un archivo y recibe un callback que se ejecuta
 cuando la lectura termina (ya sea con éxito o con error). */

fs.readFile(rutaArchivo, "utf8", (errorLectura, data) => {
  if (errorLectura) {
    console.log("Error leyendo package.json:", errorLectura.message);
    return;
  }

  let contenidoObj;
  try {
    /*  Convertimos el texto a objeto  */
    contenidoObj = JSON.parse(data);
  } catch (err) {
    console.log("Error al parsear el JSON:", err.message);
    return;
  }

  /* 2do Callback
   Esta función obtiene información del archivo (tamaño, fecha, etc.)
   y recibe un callback que se ejecuta al finalizar. */
  fs.stat(rutaArchivo, (errorStat, stats) => {
    if (errorStat) {
      console.log("Error obteniendo estadísticas:", errorStat.message);
      return;
    }

    const info = {
      contenidoStr: data,
      contenidoObj,
      size: stats.size,
    };

    console.log("--- INFO (callbacks) ---");
    console.log(info);

    /* 3er Callback
     Esta función escribe un archivo y recibe un callback que se ejecuta
     cuando termina la escritura (con éxito o error). */
    fs.writeFile(
      salida,
      JSON.stringify(info, null, "\t"),
      "utf8",
      (errorEscritura) => {
        if (errorEscritura) {
          console.log("Error escribiendo info.txt:", errorEscritura.message);
          return;
        }

        console.log("Archivo info.txt creado correctamente");
      }
    );
  });
});
