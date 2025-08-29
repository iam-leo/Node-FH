const users = [
    { id: 1, name: 'Leandro' },
    { id: 2, name: 'Ana' },
    { id: 3, name: 'Juan' },
];

function getUserById(id, callback) {
    const user = users.find(user => user.id === id);


    if ( !user ) {
        return callback(`User with id ${id} not found`);
    }

    return callback(null, user);
}

module.exports = {
    getUserById
};