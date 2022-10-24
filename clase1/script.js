let userName = prompt('¿Cuál es tu nombre?');
let userSurname = prompt('¿Cuál es tu apellido?');
let edad = prompt('¿Cuántos años tienes?')
let mascota = prompt('¿Qué tipo de mascota tienes? Si no tenés, poné "ninguna');

console.log(userName, userSurname);

///Chekear si el usuario es mayor de edad
if(parseInt(edad) >= 18){
    console.log('Eres mayor de edad')
}else{
    console.log('Todavía estás muy chiquitx')
}

switch(mascota.toLowerCase()){
    case "ninguna":
        console.log('qué triste, con lo feliz que te hace un animalito');
        break;
    case "perro":
        console.log('está bien, ¿pero no preferirías un gato?');
        break;
    case "gato":
        console.log('in michis we trust <3');
            break;
    default:
        console.log('¡qué animal tan raro!')
    }