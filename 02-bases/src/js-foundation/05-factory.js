//  NOTE: Un factory function es una función que genera otra función.

/* const { getId } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin'); */

//importacion utilizando el index.js de la carpeta plugins
const { getId, getAge } = require('../plugins');

const buildPerson = ( {name, birthday} ) => {
    return {
        //id: Math.floor(Math.random() * 1000), // Simula un ID unico
        id: getId(), // Genera un ID unico con la libreria uuid
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