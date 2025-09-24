const getPokemonById = ( id, callback ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    return fetch( url )
        // >> Clase 06
        /* .then( resp => resp.json() )
        .then( pokemon => {
            callback( pokemon.name );
        }) */

        // >> Clase 07
        .then( resp => resp.json() )
        // .then( () => { throw new Error('No se pudo obtener el pokemon') } )
        .then( pokemon => pokemon.name )
};

module.exports = {
    getPokemonById
};