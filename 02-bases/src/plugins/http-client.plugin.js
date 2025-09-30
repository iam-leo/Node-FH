const axios = require('axios');

// Codigo inicial del curso

/* const httpClientPlugin = {
    get: async ( url ) => {
        const resp = await fetch( url );
        return await resp.json(); // Retornamos el JSON directamente de la respuesta fetch (data)
    },
} */

// >> Clase video 37
const httpClientPlugin = {
    get: async ( url ) => {
        const { data } = await axios.get( url );
        return data; // Retornamos el JSON directamente de la respuesta axios (data)
    },
}

module.exports = {
    http: httpClientPlugin
};