//Ejericicos propuestos
//durante la clase

class Persona {
    nombre;
    apellido;
    edad;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    comprobarMayoríaDeEdad(){
        this.edad >= 18 ? console.log('true') : console.log('false');
    }
}

class Dog {
    constructor(color, sex, adoptionState){
        this.color = color;
        this.sex = sex;
        this.adoptionState = adoptionState;
    }

    showAdoptionState() {
        return this.adoptionState;
    }
    adoptDog( bool ) {
        this.adoptionState = bool ;
    }

}

let Rocco = new Dog ('negro', 'macho', false);

// console.log(Rocco)

// Rocco.adoptDog(true);

// console.log(Rocco)


