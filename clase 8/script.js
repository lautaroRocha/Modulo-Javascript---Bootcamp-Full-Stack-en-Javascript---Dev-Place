// -Realizar un programa que simule una calculadora, donde realice las operaciones básicas (suma, resta, multiplicación, división), el usuario debe primero ingresar dos valores, y especificar con un carácter la operación a realizar, para el uso del ejercicio debe usar la sentencia switch.


let primerOperando = document.querySelector('#primer-operando')
let segundoOperando = document.querySelector('#segundo-operando')
let operador = document.querySelector('#operador')
let botonCalcular = document.querySelector('#calculadora-boton')
let resultado = document.querySelector('#calculadora-resultado')

botonCalcular.onclick = () =>{
    let primer = parseInt(primerOperando.value);
    let segundo = parseInt(segundoOperando.value);

    switch(operador.value){
        case "+":
        resultado.textContent = 'El resultado es ' + (primer + segundo)
        break;
        case "-":
        resultado.textContent = 'El resultado es ' + (primer - segundo)
        break;
        case "x":
        resultado.textContent = 'El resultado es ' + (primer * segundo)
        break;
        case "%":
        resultado.textContent = 'El resultado es ' + (primer / segundo)
        break;
    }
}




// -Realizar un programa que permita ingresar por teclado 10 números en un array debe:

// Mostrar el número mayor
// Mostrar el número menor
// Mostrar los números pares
// Mostrar los números impares
// Ordenarlos de manera Ascendente
// Ordenarlos de manera Descendente

let numerosIngresados = [6, 7, 8, 1, 2, 3, 4, 5, 9, 10,];

let botonNuevoNumero = document.querySelector('#añadir-numero');
let numeroNuevo = document.querySelector('#nuevo-numero')
let botonesOcultos = document.querySelector('.botones-ocultos')
    let mayorNum = document.querySelector('#mayor')
    let menorNum = document.querySelector('#menor')
    let parNum = document.querySelector('#par')
    let imparNum = document.querySelector('#impar')
    let ascNum = document.querySelector('#ascendente')
    let desNum = document.querySelector('#descendente')
let numerosResultado = document.querySelector('#numeros-resultado')

botonNuevoNumero.onclick = () =>{
    if(parseInt(numeroNuevo.value)){
    numerosIngresados.push(parseInt(numeroNuevo.value))
    mostrarBotones();
    }else{
        alert('ingresá números por favor')
    }
}

function mostrarBotones(){
    if(numerosIngresados.length >= 10){
        botonesOcultos.style.display = "flex"
        mostrarNumeros();
    }
    
}
function mostrarNumeros(){
    numerosResultado.textContent = numerosIngresados
}

mayorNum.onclick = () =>{
    numerosResultado.textContent = 'El mayor número ingresado es ' + Math.max(...numerosIngresados)
}
menorNum.onclick = () =>{
    numerosResultado.textContent = 'El menor número ingresado es ' + Math.min(...numerosIngresados)
}
parNum.onclick = () =>{
    let pares = [];
    numerosIngresados.forEach( (num) =>{
        num % 2 === 0 && pares.push(num) 
    })
    numerosResultado.textContent = 'Los números pares ingresados son ' + pares;
}
imparNum.onclick = () =>{
    let impares = [];
    numerosIngresados.forEach( (num) =>{
        num % 2 !== 0 && impares.push(num) 
    })
    numerosResultado.textContent = 'Los números pares ingresados son ' + impares;
}
ascNum.onclick = () => {
    numerosIngresados.sort(function(a, b){return a - b})
    numerosResultado.textContent = 'Los números ordenados ascendentemte son ' + numerosIngresados;
}
desNum.onclick = () => {
    numerosIngresados.sort(function(a, b){return b - a})
    numerosResultado.textContent = 'Los números ordenados descendentemnte son ' + numerosIngresados;
}

//https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/




// -Se quiere simular un juego en el que participan N jugadores y otra persona que hace de árbitro. Cada jugador elige 4 números en el rango [1, 10], pudiendo estar repetidos. A continuación, el árbitro, sin conocer los números que ha elegido cada jugador, selecciona 2 números A y B.
// El programa debe ser capaz de calcular cuántos números de los seleccionados por cada jugador están comprendidos entre los valores A y B. Ganará el jugador que más números tenga en dicho intervalo.
// Se pide implementar un programa modular que simule el juego para 3 jugadores, teniendo en cuenta que:
// Tanto los 4 datos de cada jugador, como los valores para A y B se introducirán por teclado. En todos los casos, el programa detectará la entrada de números erróneos, solicitando nuevamente el dato hasta que sea válido.
// Se deben mostrar por pantalla no solo los aciertos de cada jugador sino los datos que ha introducido cada jugador y los que ha seleccionado el árbitro. Por último, hay que imprimir la media aritmética de los aciertos de todos los jugadores

let jugadorUno = [];
let jugadorDos = [];
let jugadorTres = [];
let arbitro = [];

let botonUno = document.querySelector('#decidir-uno')
let botonDos = document.querySelector('#decidir-dos')
let botonTres = document.querySelector('#decidir-tres')

let veredictoArbitro = document.querySelector('.arbitro')

botonUno.onclick = () =>{
    jugadorUno = []
    let numElegidos = document.querySelectorAll('.numero-uno');
    numElegidos.forEach( (num) =>{
        jugadorUno.push(parseInt(num.value))
    })
    decidirArbitro()
}
botonDos.onclick = () =>{
    jugadorDos = []
    let numElegidos = document.querySelectorAll('.numero-dos');
    numElegidos.forEach( (num) =>{
        jugadorDos.push(parseInt(num.value))
    })
    decidirArbitro()
}
botonTres.onclick = () =>{
    jugadorTres = []
    let numElegidos = document.querySelectorAll('.numero-tres');
    numElegidos.forEach( (num) =>{
        jugadorTres.push(parseInt(num.value))
    })
    decidirArbitro()
}

let coincidenciasUno = []
let coincidenciasDos = [];
let coincidenciasTres = [];

let mediaUno, mediaDos, mediaTres;

function decidirArbitro(){
    arbitro = [];
    if(jugadorUno.length === 4 && jugadorDos.length === 4 && jugadorTres.length === 4){
        arbitro.push(numerosArbitro(1, 5))
        arbitro.push(numerosArbitro(6, 10))
    
    calcularAciertos()

    mediaUno = calcularMedia(coincidenciasUno);
    mediaDos = calcularMedia(coincidenciasDos);
    mediaTres = calcularMedia(coincidenciasTres);

    veredictoArbitro.innerHTML = 'El árbitro eligio ' +  arbitro + '<br>' + 'El jugador Uno eligió ' + jugadorUno + ' y tuvo ' + coincidenciasUno.length + ' aciertos, una media de '+ mediaUno +  " aciertos." + '<br>' + 'El jugador Dos eligió ' + jugadorDos +  ' y tuvo ' + coincidenciasDos.length + ' aciertos, una media de '+ mediaDos +  " aciertos." +'<br>' + 'El jugador Tres eligió ' + jugadorTres + ' y tuvo ' + coincidenciasTres.length + ' aciertos, una media de ' + mediaTres +  " aciertos." 
    }
}




function numerosArbitro(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function buscarCoincidenciaEnRango(num, arr){
    for(let i=arbitro[0]; i <= arbitro[1]; i++){
        if(i === num){
            arr.push(i)
        }
    }
}
function calcularAciertos(){
    jugadorUno.forEach( num => buscarCoincidenciaEnRango(num, coincidenciasUno));
    jugadorDos.forEach( num => buscarCoincidenciaEnRango(num, coincidenciasDos));
    jugadorTres.forEach( num => buscarCoincidenciaEnRango(num, coincidenciasTres));
}
function calcularMedia(arr){
    let sum = arr.reduce(suma, 0);
    console.log(sum)
    let media = sum / arr.length;
    return parseInt(media)
}

function suma(a, b){
    return a + b
}

//https://desarrolloweb.com/articulos/763.php#:~:text=Generar%20un%20n%C3%BAmero%20aleatorio%20con%20la%20clase%20Math%20de%20Javascript&text=var%20aleatorio%20%3D%20Math.,comprendido%20entre%200%20y%201.


// -Crear un programa para implementa una pila utilizando una lista enlazada como estructura de datos, Dicha pila deberá almacenar cualquier tipo de objeto, y deberás implementar métodos para ellos como por ejemplo:
// Insertar un objeto en la pila (push).
// Recuperar un objeto de la pila (pop).
// Obtener el objeto de la cima (top) de la pila, sin extraerlo.
// Averiguar si hay algún objeto almacenado en la pila.
// Devolver el número de objetos almacenados en la pila.
// Recordar que debes crear una clase que se ha la encarga de almacenar los valores de la pila.




// -Crear un programa que sume los elementos de una lista de enteros recursivamente.

// - Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una persona) y cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional. Construye los siguientes métodos para la clase:
// Un constructor, donde los datos pueden estar vacíos.
// mostrar(): Muestra los datos de la cuenta.
// ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
// retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos

// DOM. Utilizando el sitio web hecho en el bootcamp, devolver por consola una clase de HTML creada a eleccion. Me tendra que devolver un array con todos los nodos que tengan el mismo parametro. Tambien me tiene que devolver su longitud.

// DOM. Crear una variable que devuelva el Id de un elemento. Crear tambien una variable
