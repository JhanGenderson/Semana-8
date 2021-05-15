// fetch("https://reqres.in/api/users?page=2")

// .then((nombres)=>{
//     return nombres.json();   
// })

// .then((usuarios)=>{
//     console.log(usuarios);
//     personas.push(usuarios.data);
// })

// var personas = [];
// console.log(personas);

// let buscarPersona = (nombre, callback)=>{
//     return new Promise ((resolve,reject)=>{
        
//     })
// }

let encontrarUsuario = (arrUsuarios, usuario) => {
    return new Promise((resolve, reject) => {
      for(let i = 0; i < arrUsuarios.length; i++){
        if(arrUsuarios[i].first_name === usuario){
          resolve(i)
          return; //cortar la ejecución de la función
        }
      }
      //afuera del for
      reject(-1)
    })
  }
  
  fetch("https://reqres.in/api/users")
  .then(response => {
    return response.json()
  })
  .then(datos => {
    console.log(datos.data)
    return encontrarUsuario(datos.data, "Janet")
  })
  .then(posicion => {
    if(posicion !== -1){
      console.log(`Existe en la posición ${posicion}`)
    }else{
      console.log("No existe")
    }
  })
  .catch(err => console.log(err))