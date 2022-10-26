//Ejericicos propuestos
//durante la clase

// class Persona {
//     nombre;
//     apellido;
//     edad;
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }
//     comprobarMayoríaDeEdad(){
//         this.edad >= 18 ? console.log('true') : console.log('false');
//     }
// }

// class Dog {
//     constructor(color, sex, adoptionState){
//         this.color = color;
//         this.sex = sex;
//         this.adoptionState = adoptionState;
//     }

//     showAdoptionState() {
//         return this.adoptionState;
//     }
//     adoptDog( bool ) {
//         this.adoptionState = bool ;
//     }

// }

// let Rocco = new Dog ('negro', 'macho', false);

// console.log(Rocco)

// Rocco.adoptDog(true);

// console.log(Rocco)



// .Crea una clase NIF que se usará para mantener DNIs con su correspondiente letra.  Los atributos serán el número de DNI (entero largo) y la letra que le corresponde.  La clase dispondrá de los siguientes métodos: 
//Constructor predeterminado que inicialice el nº de DNI a 0 y la letra a espacio en blanco (será un NIF no válido). 
// Constructor que reciba el DNI y establezca la letra que le corresponde. 
// Accedentes y mutador para el número de DNI (que ajuste automáticamente la letra). 
// leer(): que pida el número de DNI (ajustando automáticamente la letra) 
// Método que nos permita mostrar el NIF (ocho dígitos, un guión y la letra en mayúscula; por ejemplo: 00395469-F) 
// La letra se calculará con un método auxiliar (privado) de la siguiente forma:  se obtiene el resto de la división entera del número de DNI entre 23 y se usa la siguiente tabla para obtener la letra que corresponde: 
// 0 - T    1 - R    2 - W    3 - A    4 - G    5 - M    6 – Y 7 - F    8 - P    9 - D   10 - X   11 - B   12 - N   13 – J 
// 14 - Z   15 - S   16 - Q   17 - V   18 - H   19 - L   20 – C 21 - K   22 – E.


class NIF{
    constructor (dni= 0){
        this.dni = dni;
        this.letra = this.dni == 0 ? " " : this.definirLetra();
    }
    get mostrarDni() {
        return this.dni
    }
    set definirDni(dni){
        this.dni = dni;
        this.definirLetra();
    }
    set setearLetra(letra){
        this.letra = letra
        console.log(this.letra)
    }
    leer(dni){
        this.definirDni = dni;
        this.definirLetra()
    }
    definirLetra(){
        let n = this.dni % 23;
        this.setearLetra = elegirLetra(n)
    }   
    nifValido(){
        if(this.dni.toString().length === 8){
            return true;
        }else{
            return false;
        }
    }
    mostrarNIF(){
        if(this.nifValido()){
            return `${this.dni}-${this.letra}`
        }else{
            return "el DNI debe tener 8 números para generar un NIF"
        }  
    }
}


let nif = new NIF(12345678)
console.log(nif)


function elegirLetra(n){
    switch(n){
        case 0:
        return "T";
        case 1:
        return "R"
        case 2:
        return "W"
        case 3:
        return "A"
        case 4:
        return     "T"
        case 5:
        return "M"
        case 6:
        return     "Y"
        case 7:
         return"F"
        case 8:
        return "P"
        case 9:
        return "D"
        case 10:
        return "X"
        case 11:
        return "B"
        case 12:
        return "N"
        case 13:
        return "J"
        case 14:
        return "Z"
        case 15:
        return "S"
        case 16:
        return "Q"
        case 17:
        return "V"
        case 18:
        return "H"
        case 19:
        return "L"
        case 20:
        return "C"
        case 21:
        return "K"
        case 22:
        return "E"
    }
}



// .Crea las siguientes clases (cada una en su archivo): Motor: con métodos para arrancar el motor y apagarlo. Rueda: con métodos para inflar la rueda y desinflarla. Ventana: con métodos para abrirla y cerrarla. Puerta: con una ventana y métodos para abrir la puerta y cerrar la puerta.Coche: con un motor, cuatro ruedas y dos puertas;  con los métodos que te parezcan adecuados.






// .crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase:
// Un constructor, donde los datos pueden estar vacíos.
// Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.
// mostrar(): Muestra los datos de la persona.
// esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.

class Persona{
    constructor(nombre, edad, dni){
        this.nombre =  nombre;
        this.edad = edad;
        this.dni =  dni;
    }

    set setNombre(nombre){
        if(typeof nombre === "string"){
            this.nombre = nombre
        }else{
            console.log("el nombre debe ser texto")
        }
    }
    set setEdad(edad){
        if(typeof edad === "number"){
            this.edad = edad
        }else{
            console.log("el nombre debe ser un número")
        }
    }
    set setDni(dni){
        if(typeof dni === "number"){
            this.dni = dni
        }else{
            console.log("el dni debe ser un númeor")
        }
    }
    get nombre(){
        return this.nombre
    }
    get edad(){
        return this.edad
    }
    get dni(){
        return this.dni
    }
    mostrar(){
        return `${this.nombre} ${this.apellido}, DNI N°${this.dni}`
    }

}

 







// Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular (que es una persona) y cantidad (puede tener decimales). El titular será obligatorio y la cantidad es opcional. Construye los siguientes métodos para la clase:
// Un constructor, donde los datos pueden estar vacíos.
// Los setters y getters para cada uno de los atributos. El atributo no se puede modificar directamente, sólo ingresando o retirando dinero.
// mostrar(): Muestra los datos de la cuenta.
// ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
// retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.

