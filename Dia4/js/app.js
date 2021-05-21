// App.js es el script principal
// 1. Tener MockAPI listo
// 2. Obtener los datos (GET)
// 3. Convertir esos datos a Elementos de HTML
// 4. Crear desde el navegador 

import {Comunicaciones} from "./Comunicacion.mjs"

import {Interface} from "./interfaz.mjs"

let comunicacion = new Comunicaciones()
let patata = new Interface()

let getProductos = () =>{
    comunicacion.obtenerProductos()
    .then(productos => {
        console.table(productos)
    })
}

getProductos();