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

    crearProducto(objProducto){
        return new Promise((resolve, reject) =>{
            // PUT, POST necesitamos los datos y las cabeceras
            let configuracion = {
                method:'POST',
                body:JSON.stringify(objProducto), //lo transformamos a texto
                headers: {'Content-Type':'application/json'}
            }

            fetch(URL, configuracion)

            // FORMA TRADICIONAL
            // .then(respuesta => {
                // Tengo la respuesta con el status
                // return respuesta.json()
            // })

            // FORMA RESUMIDA
            .then(respuesta => respuesta.json())

            // FORMA TRADICIONAL
            // .then(productos => {
            //     Tengo los datos ya en JS
            //     resolve(productos)
            // })

            // FORMA RESUMIDA
            .then(productoCreado => resolve(productoCreado))

            .catch(error => reject(error))
        })
    }
}

export{
    Comunicaciones
}