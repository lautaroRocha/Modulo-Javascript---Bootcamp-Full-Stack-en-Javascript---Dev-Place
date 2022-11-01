//PATRON SINGLETON DE CREACIÖN
//solo permite una instancia de cada clase

let isUnique = null;

class UniqueObject{
    constructor(data){
    if(!isUnique){
        this.data = data;
        isUnique = this;
    }else{
        return isUnique
    }
    console.log('unique object created');
    }

    getData(){
        return this.data;
    }
}

function testSingleton(){
    let unique1 = new UniqueObject('primero')
    let unique2 = new UniqueObject('segundo');
    console.log(unique2.getData())
}

//testSingleton();

//PATRON FACTORY
//abstrae el proceso de instansación
//y divide las clases


//PATRON BUILDER
//se usa para construir objetos complejos
//tiene cuatro actores, el director, el builder
//el builder concrreto y el producto

// class Director{
//     constructor(){
//         this.structure = ['Maze', 'Wall', 'Door'];
//         console.log('Director created')
//     }

//     Construct(){
//         for (var all in this.structure){
//             let builder = new ConcreteBuilder();
//             builder.BuildPart(this.structure[all]);
//             builder.GetResult()
//         }
//     }
// }

// class Builder{
//     constructor(){
//     }
//     BuildPart(){
//     }
// }

// class ConcreteBuilder extends Builder{
//     constructor() {
//         super()
//         console.log('ConcreteBuilder created')
//     }
//     BuildPart(rawmaterial){
//         console.log("Building part")
//         var material = rawmaterial;
//         this.product = new Product(material);
//     }
//     GetResult(){
//         console.log(JSON.stringify(this.product))
//         return this.product;
//     }
// }

// class Product{
//     constructor(material){
//         console.log('Product created')
//         this.data = material;
//     }
// }

// function startBuilder(){
//     let director = new Director()
//     director.Construct()
// }

//startBuilder();


// 1- Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
// Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos.

class ProductosBanco{
    constructor(producto, usuario, status){
        this.producto = producto,
        this.usuario = usuario;
        this.status = status;
    }
    assign(usuario){
        return new ProductosBanco(this.producto, usuario, 'correcto');
    }
    set actualizarEstado(status){
        this.status = status;
    }
}

const ccGUTIERREZ = new ProductosBanco('Cuenta Corriente', 'Osvaldo Gutierrez', 'en mora');
const ccRODRIGUEZ = ccGUTIERREZ.assign('Rodrigo Rodríguez');

function comprobarPrototype(){
    console.log(ccGUTIERREZ.type === ccRODRIGUEZ.type);
    console.log(ccGUTIERREZ.status)
    console.log(ccRODRIGUEZ.status)
    console.log(ccRODRIGUEZ instanceof ProductosBanco);
}

//comprobarPrototype()

// 2 - Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. Si intento crear una segunda oficina me debería devolver la primera instancia creada. Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.


//Esta clase está escrita siguiendo el diseño Singleton,
//y no permite herencia (es imposible crear una clase que
//herede de ésta), esto viola el principio abierto/cerrado de
//diseño sólido.

let oficinaEnCentro = null;

class OficinaDistrito{
    constructor(nombre, empleados){
        if(!oficinaEnCentro){
            this.nombre = nombre;
            this.empleados = empleados
            oficinaEnCentro = this;
        }else{
            return oficinaEnCentro
        }
    console.log('se registró una oficina nueva')
    }

    verEmpleados(){
        return this.empleados;
    }
}

class OficinaZonal extends OficinaDistrito{
    constructor(){
        super()
    }
}

function testSingleton(){
    let oficinaUno = new OficinaDistrito('Oficinas en el centro', 35)
    let oficinaDos = new OficinaDistrito('Oficinas en el centro 2', 40);
    console.log(oficinaDos)
    console.log(oficinaDos.verEmpleados())
  
    let oficinaZonal = new OficinaZonal('Oficinas en Balcarce', 65)
    console.log(oficinaZonal)
}

//testSingleton();

// 3 - Supongamos que tienes una Pizzeria y que tus Pizzas pueden o no tener queso, tomate, masa fina y ananá. Cada pizza es customizable y se adapta segun esos parametros a lo que pide el cliente. Crear una clase pizza y un método diferente por cada argumento que necesitamos pasarle al constructor devolviendo this en cada uno de ellos.  Instanciar todos los valores por defecto que querra nuestro cliente de los ingredientes de nuestra pizza. Utilizar el metodo build para crear una nueva instancia de pizza. Aplicar el patron de diseño builder. Realizar este mismo ejercicio sin aplicar el patron de diseño builder. ¿Que pasa si solo quiero llamar a los métodos queso y tomate? Supongamos que un cliente pide solo ese tipo de pizza.

class Mozo{
    constructor(queso="con queso", tomate="con tomate", masa ="masa fina", anana="sin anana"){
        this.structure = [queso, tomate, masa, anana];
        console.log('Llegó el mozo!')
    }
    Ordenar(){
            let builder = new Horno();
            builder.BuildPart(this.structure);
            builder.GetResult()
        }
    set conQueso(boll){
        boll ? this.structure[0] = 'con queso' : this.structure[0]="sin queso";
    }
    set conTomate(boll){
        boll ? this.structure[1] = 'con tomate' : this.structure[1]="sin tomate";
    }
    set tipoDeMasa(masa){
        this.structure[2] = masa;
    }
    set conAnana(boll){
        boll ? this.structure[3] = 'con ananá' : this.structure[3]="sin tomate";
    }

}

class Cocinero{
    constructor(){
    }
    BuildPart(){
    }
}

class Horno extends Cocinero{
    constructor() {
        super()
        console.log('El cocinero prendió el horno!')
    }
    BuildPart(rawmaterial){
        console.log("Cocinando...")
        var material = rawmaterial;
        this.product = new Product(material);
    }
    GetResult(){
        console.log(JSON.stringify(this.product))
        return this.product;
    }
}

class Product{
    constructor(material){
        console.log('Pizza lista!')
        this.pizza = material;
    }
}

function ordenarPizza(){
    let mozo = new Mozo()
     mozo.conQueso = false;
     mozo.conTomate = true;
     mozo.tipoDeMasa = 'fina';
     mozo.conAnana = true;
     console.log(mozo)
    mozo.Ordenar()
}


//ordenarPizza();



// 4 - Supongamos que tengo 3 manzanas pero se diferencian cada una de su color (la primera es amarilla, la segunda roja y la tercera verde) y de su fecha de vencimiento (la primera vence en 5 dias, la segunda en 7 dias y la tercera en 10 dias). Para no instanciar cada sub clase de manzanas de manera separada crear la clase AppleFactory y dependiendo de los parámetros mandados, va a hacer una instancia de objeto. Aplicar el patrón de diseño Factory Method.



