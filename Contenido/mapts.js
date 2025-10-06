

const fs = require('fs').promises;
const path = require('path');

const rutaArchivo = path.join(__dirname, '..', 'package.json');
const salida = path.join(__dirname, 'info.txt');

fs.readFile(rutaArchivo, 'utf8')
  .then(data => {
    const contenidoObj = JSON.parse(data);
    return fs.stat(rutaArchivo)
      .then(stats => ({ data, contenidoObj, size: stats.size }));
  })
  .then(info => {
    console.log('--- INFO (promesas) ---');
    console.log(info);
    return fs.writeFile(salida, JSON.stringify(info, null, '\t'), 'utf8');
  })
  .then(() => {
    console.log('Archivo info.txt creado correctamente');
  })
  .catch(error => {
    console.log('Ocurrió un error:', error.message);
  });
