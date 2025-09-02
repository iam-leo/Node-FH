//  NOTE: Un factory function es una función que genera otra función.

const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const buildPerson = ( {name, birthday} ) => {
    return {
        //id: Math.floor(Math.random() * 1000), // Simula un ID unico
        id: uuidv4(), // Genera un ID unico con la libreria uuid
        name,
        birthday,
        //age: new Date().getFullYear() - new Date(birthday).getFullYear();
        age: getAge(birthday)
    }
}

const obj = {
    name: 'Leo',
    birthday: '1990-10-11'
}

const leo = buildPerson(obj);
console.log(leo);