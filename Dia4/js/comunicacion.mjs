const URL = "https://609f10635f32be00171cd34d.mockapi.io/productos"

class Comunicaciones{
  //  
    obtenerProductos(){
        // La finalidad es que me devuelva directamente los datos.
        return new Promise((resolve,reject) => {
            fetch(URL)
            .then(respuesta => {
                // Tengo la respuesta con el status
                return respuesta.json()
            })
            .then(productos => {
                // Tengo los datos ya en JS
                resolve(productos)
            })
            // En caso de error
            .catch(error => reject(error))
        })
    }
}

export{
    Comunicaciones
}