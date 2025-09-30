const httpClientPlugin = {
    get: async ( url ) => {
        const resp = await fetch( url );
        return await resp.json(); // Retornamos el JSON directamente de la respuesta fetch (data)
    },
}

module.exports = {
    http: httpClientPlugin
};