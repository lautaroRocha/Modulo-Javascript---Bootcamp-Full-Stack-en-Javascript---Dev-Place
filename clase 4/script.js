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
    renovarAgenda()
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

// agregarContacto(40478142, "Lautaro", "Rocha", 2235502403)

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


//crear card de contacto
let main = document.querySelector('main');


const generarCardContacto = (ele) => {
    let cardContacto = document.createElement('div');
    let dniContacto = document.createElement('span');
    dniContacto.setAttribute('class', 'dni')
    let nombreContacto = document.createElement('span');
    nombreContacto.setAttribute('class', 'name');
    let telContacto = document.createElement('span');
    telContacto.setAttribute('class', 'tel');
    let botonBorrar = generarSVG();
    cardContacto.setAttribute('class', 'contacto');
    cardContacto.appendChild(dniContacto);
    cardContacto.appendChild(nombreContacto);
    cardContacto.appendChild(telContacto)
    cardContacto.appendChild(botonBorrar);

    dniContacto.textContent = ele.dni;
    nombreContacto.textContent = `${ele.apellido}, ${ele.nombre} `;
    telContacto.textContent= ele.telefono;

    main.appendChild(cardContacto)
    botonEliminar = document.querySelectorAll('#eliminar');
    botonEliminar.forEach( (btn) =>{
        btn.onclick = (e) => {
            let dni = e.target.parentElement.firstChild.textContent;
            eliminarContacto(parseInt(dni));
        }
    })
}

function generarSVG(){
    let botonBorrar = document.createElement('svg');
    botonBorrar.setAttribute('id', 'eliminar');
    botonBorrar.setAttribute('class', 'borrar')
    botonBorrar.innerHTML = 'X';
    return botonBorrar
}


const renovarAgenda = () =>{
    main.innerHTML = "";
    agenda.forEach( (ele) =>{
        generarCardContacto(ele);
    })
}


///BOTONES Y EVENTOS

let botonAñadir = document.querySelector('#agregar');
let botonEliminar;
let botonBuscar = document.querySelector('#buscar');
let botonOrdenAsc = document.querySelector('#ordenar-asc');
let botonOrdenDes = document.querySelector('#ordenar-des');

botonAñadir.onclick = () =>{
    let dni = prompt('DNI del contacto');
    let nombre = prompt('Nombre del contacto');
    let apellido = prompt('Apellido del contacto')
    let telefono = prompt('Telefono del contacto');
    agregarContacto(parseInt(dni), nombre, apellido, parseInt(telefono));
    renovarAgenda();
}

botonBuscar.onclick = () =>{
    let dniParaVer = prompt('DNI del contacto');
    verContacto(parseInt(dniParaVer));
}

botonOrdenAsc.onclick = () => {
    agenda.sort(function (a,b){
        if(a.apellido > b.apellido){
            return 1;
        }else if(a.apellido < b.apellido){
            return -1;
        }else
        return 0;
    })  
    renovarAgenda();
}

botonOrdenDes.onclick = () => {
    agenda.sort(function (a,b){
        if(a.apellido < b.apellido){
            return 1;
        }else if(a.apellido > b.apellido){
            return -1;
        }else
        return 0;
    })  
    renovarAgenda();
}


agregarContacto(40478142, 'Lautaro', 'Rocha', 2235502403);
agregarContacto(42754844, 'Roberto', 'Ingaramo', 264458799);
agregarContacto(39654789, 'Gonzalo', 'Ordañoz', 223456998);
agregarContacto(39674789, 'Gonzalo', 'Ardañoz', 223456998);

renovarAgenda();