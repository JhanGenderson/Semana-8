class pokemon{
    Nombre;
    Fuerza;
    Tipo;
    Agilidad;
    Resistencia;
    Nivel;
    // Toda clase va a tener un constructor y siempre este metodo se ejecutara al inicio de construir un objeto con la clase
    constructor(nombre, fuerza, tipo, agilidad, resistencia, nivel){
        // Aqui construiremos el objeto
        // This hara referencia al objeto que en ese momento se ese trabajando

        this.Nombre=nombre;
        this.Fuerza=fuerza;
        this.Tipo=tipo;
        this.Agilidad=agilidad;
        this.Resistencia=resistencia;
        this.Nivel = nivel;
        // 1ro construye
        // 2do despues se ejecuta
        }
        // un metodo va a ser una accion(funcion) que va a tener mi  objeto
        aparecer(){
            console.log(`Un ${this.Nombre} salvaje aparecio`);
        }
        atacar(veces){
            console.log(`${this.Nombre} ataca con una fuerza de ${this.Fuerza} ${veces} veces`)
        }
    
}

let Pikachu = new pokemon("Pikachu",20,"Electrico",70,15,1000);

console.log(Pikachu)

let Meowth = new pokemon("Meowth", 30, "Normal", 70, 40,1000);

