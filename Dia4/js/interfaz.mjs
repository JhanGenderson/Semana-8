class Interface {
    printProductos(arregloProductos){
        const contenido = document.getElementById("platos")

        let cardsContenido = '';

        arregloProductos.forEach((item) =>{
            console.log(item)
        })
    }
}

export{
    Interface
}