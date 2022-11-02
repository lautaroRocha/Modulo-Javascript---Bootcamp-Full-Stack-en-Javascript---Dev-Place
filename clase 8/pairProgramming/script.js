const palabras = [
    {
        id : 1, 
        letras: ['R', 'A', 'T', 'O', 'N'],
        pista: 'Animal pequeño o persona avara'
    },
    {
        id : 2, 
        letras: ['C', 'O', 'D', 'I', 'G', 'O',],
        pista: "Hoy estuve todo el día luchando con el ____ y no lo pude hacer andar :("
    },
    {
        id : 3, 
        letras: ['L', 'I', 'B', 'R', 'O'],
        pista: "George R. R. Martin nunca terminó su último ______"
    },
    {
        id : 4,
        letras : ['L', 'A', 'P', 'I', 'Z'],
        pista: "Si escribo en papel y quiero poder borrar, uso un ____"
    }
]



function empezarJuego(){
    let idRandom  = Math.floor((Math.random() * (4 - 1 + 1)) + 1);
    let palabraAJugar = palabras.find( palabra => palabra.id == idRandom);
    console.log(palabraAJugar)
}

