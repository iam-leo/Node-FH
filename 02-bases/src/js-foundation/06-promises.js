const { http } = require('../plugins');

const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    // return fetch( url )
        // >> Clase 06 ( video 33 )
        /* .then( resp => resp.json() )
        .then( pokemon => {
            callback( pokemon.name );
        }) */

        // >> Clase 07 ( video 34 )
        // .then( resp => resp.json() )
        // .then( () => { throw new Error('No se pudo obtener el pokemon') } )
        // .then( pokemon => pokemon.name )

        // >> Clase 08 ( video 35 )
        // const resp = await fetch( url );

        // const pokemon = await resp.json();

        // throw new Error('No se pudo obtener el pokemon');

        // return pokemon.name;

        // >> Clase 09 ( video 36 )
        const pokemon = await http.get( url );
        return pokemon.name;


};

module.exports = {
    getPokemonById
};