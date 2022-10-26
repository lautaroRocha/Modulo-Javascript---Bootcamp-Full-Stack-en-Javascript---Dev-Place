//pairProgramming del 26/10
//Lautaro Rocha y Gonzalo Ordoñez


// Hay que armar una agenda con cuatro datos, 
// primero DnI, después nombre, 
// luego apellido y por último telefóno.

class Contacto {
    constructor(dni, nombre, telefono){
        this.dni = dni;
        this.nombre = nombre;
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



let botonAñadir = document.querySelector('#agregar');
let botonEliminar = document.querySelector('#eliminar');
let botonBuscar = document.querySelector('#buscar');
let botonAgenda = document.querySelector('#agenda');

botonAñadir.onclick = () =>{
    let dni = prompt('DNI del contacto');
    let nombre = prompt('Nombre del contacto');
    let apellido = prompt('Apellido del contacto')
    let telefono = prompt('Telefono del contacto');
    agregarContacto(parseInt(dni), nombre, apellido, parseInt(telefono))
}
botonEliminar.onclick = () =>{
    let dniParaBorrar = prompt('DNI del contacto');
    eliminarContacto(parseInt(dniParaBorrar));
}
botonBuscar.onclick = () =>{
    let dniParaVer = prompt('DNI del contacto');
    verContacto(parseInt(dniParaVer));
}
botonAgenda.onclick = () =>{
    alert(JSON.stringify(agenda))
}


   
