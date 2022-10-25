//ejercicios propuestos en clase
// Realizar un programa que imprima por consola únicamente los números mayores a 10
// {
// let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10]
// let numerosMayoresADiez = []

// function mostrarMayoresADiez(arr){
//     arr.forEach( (num) => {
//     if(num>10){
//         numerosMayoresADiez.push(num)
//     }
//     })
//     console.log(numerosMayoresADiez)
// }

// mostrarMayoresADiez(numeros);
// }




// .Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const printMonths = () => {
    months.forEach( (ele) => console.log(ele));
}




// .Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const evenOrOdd = (num) => {
    num % 2 === 0 ? console.log('par') : console.log('impar')
}


// .Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function caseInString(str){
    if(str.toLowerCase() === str){
        console.log('La palabra está completamente en minúscula')
    }else if(str.toUpperCase() === str){
        console.log('La palabra está completamente en mayúscula')
    }else{
        console.log('La palabra contiene mayúsculas y minúsculas')
    }
}


// .El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
// Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

const factorialOf = (num) => {
    if (num === 0 || num === 1)
    return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
        }
    return num;
  }

