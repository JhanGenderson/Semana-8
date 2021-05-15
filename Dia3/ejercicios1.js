// Ejercicio 1 
let iniciarJuego = ()=>{
    return new Promise((resolve,reject)=>{
     let numero = Math.random();
        console.log(numero);
        if(numero > 0.5){
            resolve("Ganaste el juego 1");
        }else{
            reject("Sigue intentando")
        }
    })
};
let iniciarJuego2 = ()=>{
    return new Promise((resolve,reject)=>{
     let numero = Math.random();
        console.log(numero);
        if(numero > 0.5){
            resolve("Ganaste el juego 2");
        }else{
            reject("Sigue intentando")
        }
    })
};
let iniciarJuego3 = ()=>{
    return new Promise((resolve,reject)=>{
     let numero = Math.random();
        console.log(numero);
        if(numero > 0.5){
            resolve("Ganaste el juego 3");
        }else{
            reject("Sigue intentando")
        }
    })
};

let iniciarJuego4 = ()=>{
    return new Promise((resolve,reject)=>{
     let numero = Math.random();
        console.log(numero);
        if(numero > 0.5){
            resolve("Ganaste el juego 4");
        }else{
            reject("Sigue intentando")
        }
    })
};

iniciarJuego()

.then((Juego1)=>{
    console.log(Juego1);
    return iniciarJuego2();
})

.then((Juego2)=>{
    console.log(Juego2);
    return iniciarJuego3();
})
.then((Juego3)=>{
    console.log(Juego3)
    return iniciarJuego4();
})
.then((Juego3)=>{
    console.log(Juego3);
})
.catch((Perdiste)=>{
    console.log(Perdiste);
})
