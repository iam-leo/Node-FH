// Punto de entrada de la aplicacion

// const { emailTemplate } = require('./js-foundation/01-template');

//require('./js-foundation/02-destructuring');

//const { getUserById } = require('./js-foundation/03-callbacks');

const { getId, getAge } = require('./plugins');

const { buildMakePerson } = require('./js-foundation/05-factory');


// console.log("Hola mundo desde app.js!");

// console.log( emailTemplate );

/* getUserById(2, (error, user) => {
    if (error) {
        return console.log(error);
    }

    console.log(user);
});

getUserById(5, (error, user) => {
    if (error) {
        return console.log(error);
    }

    console.log(user);
}); */

// CREAR UNA PERSONA
const makePerson = buildMakePerson( getId, getAge );

const obj = {
    name: 'Leo',
    birthday: '1990-10-11'
}

const leo = makePerson(obj);
console.log(leo);
