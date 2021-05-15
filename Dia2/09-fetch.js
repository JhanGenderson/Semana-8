// fetch(url)
// GET
fetch("https://reqres.in/api/users?page=2")

.then((repuesta)=>{
    // console.log(repuesta);
    return repuesta.json() //.json () va a parsear 
    // convertir la rpta
})

.then((datos) => {
    console.log(datos);
})

// POST - Enviando Datos, Crear un Recurso

// nuevoUsuario a mandar

let nuevoUsuario = {
    name:"Lezly",
    job:"Tutora"
}

// Cabeceras - Guia de remision
let cabecera = {
    // 1-metodo HTTP, 
    // 2-tipo_contenido,
    // 3-body = datos = nuevoUsuario.

    // Paso 1:
    method:'POST',//PUT, DELETE

    // Paso 2:
    headers:{
        'Content-Type':'application/json'//api sepa como procesarlo
    },

    // Paso 3:
    body: JSON.stringify(nuevoUsuario)//se convertira en un JSON de texto plano
}

// fetch(url, cabecera_con_body)
fetch("https://reqres.in/api/users", cabecera)
.then ((respuesta)=> {
    console.log("POST",respuesta)
    return respuesta.json()
})

.then((datosCreados)=>{
    console.log(datosCreados)
})

// Mockapi GET

fetch("https://609f10635f32be00171cd34d.mockapi.io/alumnos")
.then((respuesta)=>{
    return respuesta.json()
})
.then((alumnos)=>{
    console.log(alumnos)
})
.catch((error)=>{
    console.log(error)
})

//PUT

let alumnoEditado = {
    nombres:"Ash",
    apellidos:"Ketchup"
}

let configuracion = {
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(alumnoEditado)
}

// endpoint -> url/api/v1/usuarios/:id , los dos puntos (:) representan un parametro que hay que indicarle

fetch("https://609f10635f32be00171cd34d.mockapi.io/alumnos/2",configuracion)
.then((respuesta) =>{
    return respuesta.json()
})
.then((alumnoModificado)=>{
    console.log(alumnoModificado)
})
.catch((error)=> {
    console.log(error)
})