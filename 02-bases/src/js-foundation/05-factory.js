//  NOTE: Un factory function es una función que genera otra función.

const buildPerson = ( {name, birthday} ) => {
    return {
        id: Math.floor(Math.random() * 1000), // Simula un ID unico
        name,
        birthday,
        age: new Date().getFullYear() - new Date(birthday).getFullYear()
    }
}

const obj = {
    name: 'Leo',
    birthday: '1990-10-11'
}

const leo = buildPerson(obj);
console.log(leo);