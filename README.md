Leer y guardar info de package.json

Este proyecto muestra cómo leer package.json, ver su info y guardarla en info.txt usando distintos estilos de Node.js.

Archivos

callbacks.js → Con callbacks.

promesas.js → Con promesas.

asyncAwait.js → Con async/await.

sync.js → Con métodos sincrónicos.

Qué hace

Lee package.json.

Convierte el contenido a objeto.

Saca info del archivo (tamaño, etc.).

Guarda todo en info.txt.

Muestra todo en la consola.

Cómo usar
# Por ejemplo, para probar async/await
node asyncAwait.js


Después mirá que se creó info.txt y revisá la consola.

Ejemplo de salida
{
    "contenidoStr": "...",
    "contenidoObj": { ... },
    "size": 1234
}
