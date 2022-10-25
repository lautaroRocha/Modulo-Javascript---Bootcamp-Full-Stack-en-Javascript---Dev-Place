//pairProgramming del 25/10
//Lautaro Rocha y Gonzalo Ordoñez


// Hay que armar una agenda con cuatro datos, 
// primero DnI, después nombre, 
// luego apellido y por último telefóno.

let agenda = [];

const agregarContacto = (dni, nombre, apellido, telefono) => {
    if(chekearDatos(dni, nombre, apellido, telefono)){
        let contacto = [dni, nombre, apellido, telefono];
        agenda.push(contacto);
    }else{
        console.log('DNI y TELEFONO deben ser números, NOMBRE Y APELLIDO deben ser texto')
    }
}

const eliminarContacto = (dni) => {
    if(agenda.length === 0){
        console.log('No hay nada en la agenda')
    }else{
        if(isNaN(dni)){
            console.log('el DNI debe ser un número');
        }else{
          eliminarIndice(dni);
        }
    }
}

const verContacto = (dni) => {
    if(agenda.length === 0){
        console.log('No hay nada en la agenda')
    }else{
        if(isNaN(dni)){
            console.log('el DNI debe ser un número')
        }else{
        verIndice(dni);
        }
    }
}


//FUNCIONES AUXILIARES

function eliminarIndice(dni){
    let contactoAEliminar = agenda.forEach( (ele) => ele[0] = dni );
    let indiceAEliminar = agenda.indexOf(contactoAEliminar);
    agenda.splice(indiceAEliminar, 1);
    console.log('Se ha eliminado el contacto.');
}

function verIndice(dni){
    let contactoAVer = agenda.find( ele => ele[0] === dni );
    let indiceAVer = agenda.indexOf(contactoAVer);
    console.log(agenda[indiceAVer]);
}

function chekearDatos(dni, nombre, apellido, telefono){
    if( !isNaN(dni) && isNaN(nombre) && isNaN(apellido) && !isNaN(telefono)){
        return true
    }else{
        return false
    }
}



