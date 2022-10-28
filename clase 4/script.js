//pairProgramming del 27/10
//Lautaro Rocha y Gonzalo Ordoñez

class Contacto {
    constructor(dni, nombre, apellido, telefono){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

let agenda = [];
let main = document.querySelector('main');
let resultado = document.querySelector('.resultado')


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


//FUNCIONES AUXILIARES

function eliminarIndice(dni){
    let contactoAEliminar = agenda.find( ele => ele.dni === dni );
    let indiceAEliminar = agenda.indexOf(contactoAEliminar);
    agenda.splice(indiceAEliminar, 1);
}

function verIndice(dni){
    let contactoAVer = agenda.find( ele => ele.dni === dni );
    let indiceAVer = agenda.indexOf(contactoAVer);
    encontrarDatosDeContacto(agenda[indiceAVer])
}

function chekearDatos(dni, nombre, apellido, telefono){
    if(!isNaN(dni) && isNaN(nombre) && isNaN(apellido) && !isNaN(telefono)){
        return true
    }else{
        return false
    }
}

function encontrarDatosDeContacto(contacto){
    let resultadoDni= document.querySelector('#resultado-dni');
    let resultadoNombre= document.querySelector('#resultado-nombre')
    let resultadoTel=  document.querySelector('#resultado-tel')
    resultadoDni.textContent = contacto.dni;
    resultadoNombre.textContent = `${contacto.apellido}, ${contacto.nombre}`;
    resultadoTel.textContent = contacto.telefono;
    resultado.style.display = "flex"; //vuelve visible la card con el resultado
}

//crear card de contacto

const generarCardContacto = (ele) => {
    let cardContacto = escribirDatos(ele);
    main.appendChild(cardContacto)
    //cada vez que se pintan las cards
    //se levantan todos los botones nuevos
    //y se programan los eventos
    botonEliminar = document.querySelectorAll('#eliminar');
    botonEliminar.forEach( (btn) =>{
        btn.onclick = (e) => {
            let dni = e.target.parentElement.firstChild.textContent;
            eliminarContacto(parseInt(parseInt(dni)));
        }
    })
    botonEditar = document.querySelectorAll('#editar');
    botonEditar.forEach( (btn) =>{
        btn.onclick = (e) => {
            let dni = e.target.parentElement.firstChild.textContent;
            // eliminarContacto(parseInt(parseInt(dni)));
            console.log('asdas')
            editarContacto(parseInt(dni))
        }
    })

}

function generarBotonBorrar(){
    let botonBorrar = document.createElement('svg');
    botonBorrar.setAttribute('id', 'eliminar');
    botonBorrar.setAttribute('class', 'borrar')
    botonBorrar.innerHTML = 'X';
    return botonBorrar
}

function escribirDatos(ele){
    let cardContacto = document.createElement('div');
    let botonEditar = document.createElement('span')
    let dniContacto = document.createElement('span');
    let nombreContacto = document.createElement('span');
    let telContacto = document.createElement('span');
    let botonBorrar = generarBotonBorrar();

    dniContacto.setAttribute('class', 'dni')
    nombreContacto.setAttribute('class', 'name');
    telContacto.setAttribute('class', 'tel');
    cardContacto.setAttribute('class', 'contacto');
    botonEditar.setAttribute('id', 'editar');

    cardContacto.appendChild(dniContacto);
    cardContacto.appendChild(nombreContacto);
    cardContacto.appendChild(telContacto)
    cardContacto.appendChild(botonEditar);
    cardContacto.appendChild(botonBorrar);

    botonEditar.textContent = "✏️"
    dniContacto.textContent = ele.dni;
    nombreContacto.textContent = `${ele.apellido}, ${ele.nombre} `;
    telContacto.textContent= ele.telefono;

    return cardContacto
}

//función para mostrar toda la agenda en el navegador
const renovarAgenda = () =>{
    main.innerHTML = ""; //resetea la pantalla
    agenda.forEach( (ele) =>{
        generarCardContacto(ele);
    })
}

//editarcontacto

const editarContacto = (dni) =>{
    let contactoExiste = agenda.find( ele => ele.dni === dni);
    let indiceDeContacto = agenda.indexOf(contactoExiste)
        let nombre = prompt('nuevo nombre');
        let apellido = prompt('nuevo apellido');
        let telefono= prompt('nuevo telefono');
    if(typeof nombre === "string" && typeof apellido === "string" && typeof telefono === "number"){
        let objetoAEditar = agenda[indiceDeContacto];
        objetoAEditar.nombre = nombre;
        objetoAEditar.apellido = apellido;
        objetoAEditar.telefono = telefono;
    }else{
        alert('datos inválidos')
    }
   
    // if(!contactoExiste){
    //     alert('Contacto inexistente');
    // }else{
    //     const op = prompt('Elija opcion a modificar: 1/Dni 2/Nombre 3/Apellido 4/Telefono')
    //     const dat = prompt('Dato a modificar')
    //     switch(op){
    //         case '1':
    //         for (let i = 0; i < agenda.length; i++) {
    //             if (this.dni[i] === dni) {
    //                 this.dni = dat;
    //             }
    //         }
    //         break;

    //         case'2':
    //         for (let i = 0; i < agenda.length; i++) {
    //             if (this.dni[i] === dni) {
    //                 this.nombre = dat;
    //             }
    //         } 
    //         break;

    //         case'3':
    //         for (let i = 0; i < agenda.length; i++) {
    //             if (this.dni[i] === dni) {
    //                 this.apellido = dat;
    //             }
    //         } 
    //         break;

    //         case'4':
    //         for (let i = 0; i < agenda.length; i++) {
    //             if (this.dni[i] === dni) {
    //                 this.telefono = dat;
    //             }
    //         } 
    //         break;

    //         default:
    //         alert('');
    //         break;

    //     }

    // }
    renovarAgenda()

}

///BOTONES Y EVENTOS

let botonAñadir = document.querySelector('#agregar');
let botonEliminar, botonEditar;
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

botonOrdenDes.onclick = () => {
    agenda.reverse(function (a,b){
        if(a.apellido < b.apellido){
            return 1;
        }else if(a.apellido > b.apellido){
            return -1;
        }else
        return 0;
    })
    renovarAgenda();
}



//contactos por defecto
agregarContacto(40478142, 'Lautaro', 'Rocha', 2235502403);
agregarContacto(42754844, 'Roberto', 'Ingaramo', 264458799);
agregarContacto(39654789, 'Gonzalo', 'Ordañoz', 223456998);
agregarContacto(39674789, 'Gonzalo', 'Ardañoz', 223456998);

//iniciar applicación al abrir el navegador
renovarAgenda();