fetch("https://reqres.in/api/users?page=2")

.then((repuesta)=>{
    // console.log(repuesta);
    return repuesta.json() //.json () va a parsear 
})

.then((datos) => {
    console.log(datos);
})