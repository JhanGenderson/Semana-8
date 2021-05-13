var manzana = "apple";
var manzana = "Manzana Israel";

console.log(manzana);

// Let potato = "papa";

// Let es mas seguro
let potato ="papa amarilla";

console.log(potato);

for(var i = 0; i < 3; i++){
    console.log(i);
}

console.log(`iterador: ${i}`);

for(let j = 10; j < 13; j++){
    console.log(j);
}

console.log(`jterador: ${j}`);//Error
// Let solo existe en el bloque que se le cree

// Const
const Pi = 3.1415;

// Pi = 42;No podemos cambiar el valor de una constante, pero si podemos utilizarla.

console.log(Pi);

let saludar = function(){
    console.log("Holaaaaaa");
}

const despedirme = function(){//Es muy util para usar en funciones
    console.log("Adios Goku");
}

saludar();
despedirme();
despedirme();
despedirme();