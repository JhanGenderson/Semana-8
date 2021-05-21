//App.js es el script principal
//1. Tener MockAPI Listo - ✔
//2. Obtener los datos (GET) - ✔
//3. Convertir esos datos a Elementos de HTML - ✔
//4. Crear desde el navegador, POST (PUT, DELETE)
//4.1 Detectar el evento click de un botón, para crear✔
//4.2 Vamos a invocar a un modal✔
//4.3 tener un método para enviar los datos
//5. Carrito.....

import {Comunicaciones} from "./comunicacion.mjs"

import {Interface} from "./interfaz.mjs"

let comunicacion = new Comunicaciones()
let interfaz = new Interface()


let btnCrear = document.getElementById("btn-crear")
let modalCrear = new bootstrap.Modal(document.getElementById("modal-crear"))
let btnGuardar = document.getElementById("btn-guardar")


let getProductos = () => {
  comunicacion.obtenerProductos()
  .then(productos => {
    // console.table(productos)
    interfaz.printProductos(productos)
  })
  .catch(err => console.log(err))
}
getProductos()

btnCrear.addEventListener("click", () =>{
    modalCrear.show()
})

btnGuardar.addEventListener("click", () =>{
    let formulario = document.getElementById("form-crear")
    let nuevoProducto = {
        nombre: formulario["nombre"].value ,
        descripcion: formulario["descripcion"].value,
        precio: formulario["precio"].value,
    }
    // console.table(nuevoProducto)
    comunicacion.crearProducto(nuevoProducto)
    .then(productoCreado => {
        // Ya creamos exitosamente nuestro producto
        // console.log(productoCreado)
        formulario.reset()
        modalCrear.hide()
        getProductos()
    })
    .catch(err => console.log(err))
})