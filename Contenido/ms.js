
const fs = require('fs');
const path = require('path');


const rArchivo = path.join(__dirname, '..', 'package.json');

try {
  /* leemos como string el archivo. */
  const contenidoString = fs.readFileSync(rArchivo, 'utf8');

  /* convertimos a objeto. */
  const contenidoObjeto = JSON.parse(contenidoString);

  /* obtenemos los datos en tamaño byte. */
  const datos = fs.statSync(rArchivo);
  const size = datos.size;


  /* Creamos el objeto */
  const info = {
    contenidoString,
    contenidoObjeto,
    size
  };

  /* Mostramos por consola */
  console.log('--- INFO (sincrónico) ---');
  console.log(info);

  /* Guardamos en info.txt */
  fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));
  console.log('Archivo info.txt creado correctamente');
} catch (error) {
  console.log('Ocurrió un error:', error.message);
}
