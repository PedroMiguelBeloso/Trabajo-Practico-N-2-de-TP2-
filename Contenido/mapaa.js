
const fs = require('fs').promises;
const path = require('path');

(async () => {
  const rutaArchivo = path.join(__dirname, '..', 'package.json');
  const salida = path.join(__dirname, 'info.txt');

  try {
    const contenidoStr = await fs.readFile(rutaArchivo, 'utf8');
    const contenidoObj = JSON.parse(contenidoStr);
    const stats = await fs.stat(rutaArchivo);

    const info = {
      contenidoStr,
      contenidoObj,
      size: stats.size
    };

    console.log('--- INFO (async/await) ---');
    console.log(info);

    await fs.writeFile(salida, JSON.stringify(info, null, '\t'), 'utf8');
    console.log('Archivo info.txt creado correctamente');
  } catch (error) {
    console.log('Error:', error.message);
  }
})();
