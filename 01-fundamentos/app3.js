const fs = require('fs');

// Leer el contenido del archivo README.md
const content = fs.readFileSync('README.md', 'utf8');

// Contar el número de palabras en el contenido.
const wordCount = content.split(' ').length;

// Contar el numero de palabras "Astro" en el contenido.
// MY_SOLUTION: 
const astroWordCount = content.split('Astro').length - 1;

// SOLUTION:  ✅
const astroWordCountSolution = (content.match(/Astro/ig) ?? []).length;


// Mostrar los resultados en la consola.
console.log(`El archivo README.md contiene ${wordCount} palabras.`);

console.log(`El archivo README.md contiene la palabra "Astro" ${astroWordCount} veces.`);

console.log(`El archivo README.md contiene la palabra "Astro" ${astroWordCountSolution} veces. (BEST SOLUTION).`);