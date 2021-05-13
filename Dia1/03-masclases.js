class Animal{
    constructor(nombre, velocidad, tamanio){
        this._nombre = nombre;
        this._velocidad = velocidad;
        this._tamanio = tamanio;
    }

    correr(){
        console.log(`${this._nombre} corre a ${this._velocidad} m/s`);
    }

    detener(){
        console.log(`${this._nombre} se detuvo D:`)
    }
}

let Panda = new Animal("Panda", 1, 100);

// Heredando Propiedades
class Conejo extends Animal{
    constructor(nombre, velocidad, tamanio, salto){
        // super me permite acceder al constructor de la clase con mayor jerarquia
        super(nombre,velocidad,tamanio);
        this._salto = salto;
    }
    // Un metodo que es especifico de la clase Conejo
    esconder(){
        console.log(`${this._nombre} corre a ${this._velocidad} m/s y da un salto de ${this._salto} m. y se esconde`)
    }
}

let BadBunny = new Conejo("Bad Bunny", 0.85, 1.75, 0.5);

console.log(BadBunny);
BadBunny.correr;
BadBunny.detener;
BadBunny.esconder;