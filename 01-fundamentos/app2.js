const fs = require('fs');

// Leer el contenido del archivo README.md
const data = fs.readFileSync('README.md', 'utf8');

// Reemplazar todas las ocurrencias de "Astro" por "Angular"
const newData = data.replace(/Astro/ig, 'Angular');

// Escribir el nuevo contenido en un archivo nuevo README
fs.writeFileSync('README-Angular.md', newData, 'utf8');

//console.log(data);
