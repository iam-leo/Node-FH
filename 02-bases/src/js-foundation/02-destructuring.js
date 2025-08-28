console.log( process );

const { USER, SHELL } = process.env;

console.table( { USER, SHELL } );