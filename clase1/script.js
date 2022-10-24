///Ejercicios propuestos durante la Lectura.
// {
// let userName = prompt('¿Cuál es tu nombre?');
// let userSurname = prompt('¿Cuál es tu apellido?');
// let edad = prompt('¿Cuántos años tienes?')
// let mascota = prompt('¿Qué tipo de mascota tienes? Si no tenés, poné "ninguna');

// console.log(userName, userSurname);

// ///Chekear si el usuario es mayor de edad
// if(parseInt(edad) >= 18){
//     console.log('Eres mayor de edad')
// }else{
//     console.log('Todavía estás muy chiquitx')
// }

// switch(mascota.toLowerCase()){
//     case "ninguna":
//         console.log('qué triste, con lo feliz que te hace un animalito');
//         break;
//     case "perro":
//         console.log('está bien, ¿pero no preferirías un gato?');
//         break;
//     case "gato":
//         console.log('in michis we trust <3');
//             break;
//     default:
//         console.log('¡qué animal tan raro!')
//     }
// }
///Ejercicios del challenge.

// Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
// Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100.

function calcIVA(){
    const price = document.querySelector('#precio');
    let iva = document.querySelector('#iva');
    let total = document.querySelector('#valor-total');

    iva.textContent = price.value * 0.21;
    total.textContent= parseFloat(price.value) + parseFloat(iva.textContent);
}

// En una sala de juegos existen tres salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

function enterGameRoom(){
    let tickets = document.querySelector('#tickets')
    let access = document.querySelector('#access')

    switch(tickets.value){
        case '1':
        access.textContent = "Puedes accedes a la sala de Consolas"
        break;
        case '2':
        access.textContent = "Puedes accedes a la sala de Consolas y a la de Juegos 2D"
        break;
        case '3':
        access.textContent = "Puedes accedes a la sala de Consolas, a la de Juegos 2D y a la de Juegos 3D"
        break;
        case '4':
        access.textContent = "Puedes accedes a la sala de Consolas, a la de Juegos 2D y a la de Juegos 3D y ala de Realidad Virtual"
        break;
    }
}

// En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200 y si elige electrico o 3 se le enviará a la ofician 300.

function sendToOffice(){
    let carType = document.querySelector('#car-type');
    switch(carType.value){
        case 'gasolina':
        alert('Muy bien! Pase por la oficina 100');
        break;
        case 'diesel':
        alert('Muy bien! Pase por la oficina 200');
        break;
        case 'eléctrico':   
        alert('Muy bien! Pase por la oficina 300');
        break;
    }
    carType.value = "";
}

// .Un comerciante hace descuentos a sus clientes de la siguiente forma:
// Si ha comprado menos de 100 euros no hay descuento
// Si la compra está entre 100 y 300 euros le descuenta un 5%
// Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
// Si la compra supera los 500 euros le descuenta un 15%

function calcDisc(){
    const moneySpent = document.querySelector('#moneySpent').value;
    let discount;
    let finalPrice;
    const result = document.querySelector('#disc')

    if(moneySpent <= 100){
        discount = 0;
    }else if(moneySpent > 100 && moneySpent <= 300){
        discount = (moneySpent * 5)/100;
    }else if(moneySpent > 300 && moneySpent <= 500){
        discount = (moneySpent * 10)/100;
    }else if(moneySpent > 500){
        discount = (moneySpent * 15)/100;
    }

    finalPrice = moneySpent - discount;

    if(moneySpent){
    result.textContent = `El precio final es de ${finalPrice} euros, se han descontado ${discount} euros.`;
    }
}


// Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  

function countTo(){
    const finalNumber = document.querySelector('#num').value;
    let result = document.querySelector('#nums')
    let count = [];

    for(let i = 0; i === finalNumber; i++){
        count.push(i);
    }
    result.textContent= count.join(', '); 
}

// .Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. Los números se separarán por comas.  
// .En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
// .Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.

function returnRemainderTwo(){
    let topNumber = document.querySelector('#top-number').value;
    let remainderOutput = document.querySelector('#remainder');
    let lesserNumbers = []

    for(let i = 1; i <= topNumber; i++){
        lesserNumbers.push(i);
    }

    let remainderList = lesserNumbers.filter(num => num % 3 === 2);

    if(topNumber){
        remainderOutput.textContent = remainderList.join(', ')+".";
    }
}

// .Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4

function media(){
    
    let result = document.querySelector('#media');

    let num1 = parseFloat(prompt('Ingrese un número'));
    let num2 = parseFloat(prompt('Ingrese un número'));
    let num3 = parseFloat(prompt('Ingrese un número'));
    let num4 = parseFloat(prompt('Ingrese un número'));

    let promedio = ( num1 + num2 + num3 + num4 ) / 4;

    result.textContent = "El promedio entre " + num1 + ", " + num2+ ", " + num3 + " y "+ num4+ " es " + promedio;
}
