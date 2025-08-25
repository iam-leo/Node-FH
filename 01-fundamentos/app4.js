console.log('Inicio de programa');

setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout');
}, 0 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');

// Este ejemplo muestra cómo funciona el Event Loop en Node.js.
// El Event Loop gestiona la ejecución de código, eventos y tareas asíncronas.
// Primero se ejecuta el código síncrono (console.log), luego las funciones en setTimeout se colocan en la cola de tareas.
// Aunque dos setTimeout tienen 0 ms, se ejecutan después del código síncrono y en el orden en que fueron definidos.
// El orden de salida será:
// 1. 'Inicio de programa'
// 2. 'Fin de programa'
// 3. 'Segundo Timeout'
// 4. 'Tercer Timeout'
// 5. 'Primer Timeout' (después de 3 segundos)