//pairProgramming del 26/10
//Lautaro Rocha y Gonzalo Ordoñez


// Hay que armar una agenda con cuatro datos, 
// primero DnI, después nombre, 
// luego apellido y por último telefóno.

class Contacto {
    constructor(dni, nombre, apellido, telefono){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}


let agenda = [];


const agregarContacto = (dni, nombre, apellido, telefono) => {
    let contactoExiste = agenda.find( ele => ele.dni === dni );
    if(!contactoExiste){
        if(chekearDatos(dni, nombre, apellido, telefono)){
            let contacto = new Contacto(dni, nombre, apellido, telefono);
            agenda.push(contacto);
            alert('se ha añadido un contacto nuevo')
        }else{
            alert('DNI y TELEFONO deben ser números, NOMBRE Y APELLIDO deben ser texto')
        }
    }else{
        alert('ya hay un contacto con ese dni')
    }
}

const eliminarContacto = (dni) => {
    if(agenda.length === 0){
        alert('No hay nada en la agenda')
    }else{
        if(isNaN(dni)){
            alert('el DNI debe ser un número');
        }else{
          eliminarIndice(dni);
        }
    }
}

const verContacto = (dni) => {
    if(agenda.length === 0){
        alert('No hay nada en la agenda')
    }else{
        if(isNaN(dni)){
            alert('el DNI debe ser un número')
        }else{
        verIndice(dni);
        }
    }
}


//FUNCIONES AUXILIARES

function eliminarIndice(dni){
    let contactoAEliminar = agenda.find( ele => ele.dni === dni );
    let indiceAEliminar = agenda.indexOf(contactoAEliminar);
    agenda.splice(indiceAEliminar, 1);
    alert('Se ha eliminado el contacto.');
}

function verIndice(dni){
    let contactoAVer = agenda.find( ele => ele.dni === dni );
    let indiceAVer = agenda.indexOf(contactoAVer);
    alert(JSON.stringify(agenda[indiceAVer]));
}

function chekearDatos(dni, nombre, apellido, telefono){
    if(!isNaN(dni) && isNaN(nombre) && isNaN(apellido) && !isNaN(telefono)){
        return true
    }else{
        return false
    }
}






   
