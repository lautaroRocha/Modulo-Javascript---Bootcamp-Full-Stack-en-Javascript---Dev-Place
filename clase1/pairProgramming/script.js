function iniciarPrograma(){
    let opcion = prompt('¿Qué programa quieres correr? 1- Actividades según el clima / 2 - Verificación de edad / 3 - Todos tus años');

    if(option){
    switch(opcion){
        case '1':
            actividadesSegunClima();
            break;
        case '2':
            comprobarMayoriaDeEdad();
            break;
        case '3':
            todosTusAños();
        default:
            alert('Es necesario elegir una opción');
            iniciarPrograma()
            break;
    }
    }
}



// 1- mediante un switch case, pedir al usuario informacion del clima, y proponer actividades acordes
function actividadesSegunClima(){
        let clima = prompt('¿Cómo está el clima hoy, soleado, lluvioso, o nublado?');

        let soleado = "Está ideal para disfrutar del aire libre y la natualeza.";
        let lluvioso = "Está ideal para estar adentro.";
        let nublado = "Está ideal para dar un paseo e ir a tomar un café.";

        switch(clima.toLowerCase()){
            case 'soleado':
                alert(soleado)
                break;
            case 'lluvioso':
                alert(lluvioso)
                break;
            case 'nublado':
                alert(nublado)
                break;
            default:
                alert('No entiendo lo que me dices')
        }



}


// 2-mediante un condicional, realizar una comprobación simple sobre la edad de un usuario. El programa debe comprobar la mayoría de edad, y devolver el resultado al usuario

function comprobarMayoriaDeEdad(){
    let edad = parseInt(prompt('Ingrese su edad'));

    if(edad < 18){
        alert('Usted es menor de edad');
    }else if(edad >= 18){
        alert('Usted es mayor de edad')
    }else{
        alert('No puedo comprobar tu edad si no me la decís.')
    }
}


// 3-Solicitar al usuario el año actual y su año de nacimiento. Devolver mediante un ciclo for todos los años en el medio.

function todosTusAños(){
    let añoActual = parseInt(prompt('¿Qué año es hoy?'));
    let añoNacimiento = parseInt(prompt('¿En qué año naciste?'));
    let todosTusAños = [];

    for(let i = añoNacimiento; i <= añoActual; i++){
        todosTusAños.push(i)
    }

    alert(todosTusAños)

}


iniciarPrograma();