//Ej1//////////////////////////////////////////
let numero = prompt("ingrese un numero");

for (let i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
// //Ej2///////////////////////////////////////////
// let array = [];
// let numero1;

// do {
//     numero = prompt("añadir numero(0 para terminar)")
//     if (numero != 0) {
//         array.push(numero);
//         console.log(array);
//     }
// } while (numero != 0);
// //Ej3//////////////////////////////////////////////////
// let rdNumber = Math.floor(Math.random() * 100) + 1;
// // console.log(rdNumber);
// let win = false;
// let guess;
// let tries = 0;

// while (!win) {
//     guess = prompt("adivina el numero(1-100)");
//     tries++;
//     if (guess > rdNumber) {
//         console.log("el numero es menor...");
//     } else {
//         console.log("el numero es mayor...");
//     }
//     if (guess == rdNumber) {
//         console.log("adivinaste! el numero era " + rdNumber);
//         win = true;
//     }
// }
// //Ej4//////////////////////////////////////////////////
// let numero3 = prompt("ingrese un numero");
// let primo = true;

// if (numero3 == 0 || numero3 == 1 || numero3 == 4) {
//     primo = false;
// } else {
//     for (let i = 2; i < numero3 / 2; i++) {
//         if (numero3 % i == 0) {
//             primo = false;
//         }
//     }
// }

// if (primo) {
//     console.log("el numero es primo");
// } else {
//     console.log("el numero no es primo");
// }

// //Ej5///////////////////////////////////////////////////
// let numero2 = prompt("ingrese un numero");
// let divisor = numero2;

// console.log("DIVISORES");
// while (divisor >= 1) {
//     if (numero % divisor == 0) {
//         console.log(divisor);
//     }
//     divisor--;
// }
// //Ej6///////////////////////////////////////////////////
// let frutas = ["piña", "kiwi", "fresa", "sandia", "arandano", "guayaba",
//     "papaya", "mora", "melon", "pera"];

// for (const fruta of frutas) {
//     console.log(fruta);
// }
// //Ej7////////////////////////////////////////////////////
// let numeros = [1, 3, 4, 6, 37, 51, 9, 4, 27, 9];

// for (const numero of numeros) {
//     console.log(numero * 2);
// }
// //Ej8///////////////////////////////////////////////////
// let familia = [
//     {
//         nombre: "blanca",
//         apellido: "Leyton",
//         parentesco: "mamá",
//         edad: 45
//     },
//     {
//         nombre: "Nelson",
//         apellido: "Galleguillos",
//         parentesco: "papá",
//         edad: 45
//     },
//     {
//         nombre: "Natanael",
//         apellido: "Galleguillos",
//         parentesco: "hermano",
//         edad: 15
//     },
//     {
//         nombre: "Abigail",
//         apellido: "Galleguillos",
//         parentesco: "hermana",
//         edad: 11
//     }
// ];

// for (const familiar of familia) {
//     console.log("Hola me llamo " + familiar.nombre + " " + familiar.apellido
//         + ", Tengo " + familiar.edad + " años y soy el/la " + familiar.parentesco + " de la familia.");
// }
// //Ej9/////////////////////////////////////////////////
// let numeros2 = [1, 3, 4, 6, 37, 51, 9, 4, 27, 9];

// console.log("IMPARES:");
// for (const numero of numeros) {
//     if (numeros2 % 2 != 0) {
//         console.log(numero);
//     }

// }
// //Ej10////////////////////////////////////////////////////
// let numero4;
// let pares = 0;
// let impares = 0;

// do {
//     numero4 = prompt("ingrese un numero");
//     if (numero4 % 2 == 0) {
//         pares += numero;
//     } else {
//         impares += numero;
//     }

// } while (numero4 != 0);
// console.log("suma pares: " + pares);
// console.log("suma impares: " + impares);
// //Ej11-12/////////////////////////////////////////////////////
// let numeros3 = [1, 3, 4, 6, 37, 51, 9, 4, 27, 9];
// let nMayor = 0;
// let nMenor = numeros3[0];

// for (const numero of numeros) {
//     if (numero > nMayor) {
//         nMayor = numero;
//     }
//     if (numero < nMenor) {
//         nMenor = numero;
//     }
// }
// console.log("numero mayor: " + nMayor);
// console.log("numero mayor: " + nMayor);
// //Ej13//////////////////////////////////////////////////////////
// let jugador1 = {
//     nombre: "",
//     opcion: ""
// }
// let jugador2 = {
//     nombre: "",
//     opcion: ""
// }
// let empate = true;

// jugador1.nombre = prompt("jugador 1 ingrese su nombre");
// jugador2.nombre = prompt("jugador 2 ingrese su nombre");

// do {
//     jugador1.opcion = prompt("ingresa una opcion(piedra/papel/tijeras)");
//     jugador2.opcion = prompt("ingresa una opcion(piedra/papel/tijeras)");

//         if (jugador1 == "piedra" && jugador2 == "tijera") {
//             console.log("jugador " + jugador1.nombre + " gana");
//             empate = false;
//         }
//         if (jugador2 == "piedra" && jugador1 == "tijera") {
//             console.log("jugador " + jugador2.nombre + " gana");
//             empate = false;
//         }
//         if (jugador1 == "papel" && jugador2 == "piedra") {
//             console.log("jugador " + jugador1.nombre + " gana");
//             empate = false;
//         }
//         if (jugador2 == "papel" && jugador1 == "piedra") {
//             console.log("jugador " + jugador2.nombre + " gana");
//             empate = false;
//         }
//         if (jugador1 == "tijera" && jugador2 == "papel") {
//             console.log("jugador " + jugador1.nombre + " gana");
//             empate = false;
//         }
//         if (jugador2 == "tijera" && jugador1 == "papel") {
//             console.log("jugador " + jugador2.nombre + " gana");
//             empate = false;
//         }
//         if (jugador1 == jugador2) {
//             console.log("empate");
//         }
    
// } while (empate);
//Ej14/////////////////////////////////////////////////////////////
// let n = "";

// for (let i = 0; i <= 5; i++) {
//     n += " *";
//     let space ="";
//     let x = i;
//     while (x < 5) {
//         space += " ";
//         x++;
//     }
//     space += n;
//     console.log(space);
// }
//Ej15//////////////////////////////////////////////////////////////
// let space = " ";

// for (let i = 0; i <= 5; i++) {
//     space += " ";
//     let n = "";
//     let x = i;
//     while (x < 5) {
//         n += " *";
//         x++;
//     }
//     n = space + n;
//     console.log(n);
// }
//Ej16////////////////////////////////////////////////////////////////
// let arrayNum = [10,4,8,7,3,6,5,1,2,9];
// let swap;

// for (let i = 0; i < arrayNum.length; i++) {
//     for (let x = 0; x < arrayNum.length; x++) {
//         if (arrayNum[x] > arrayNum[i]) {
//             swap = arrayNum[x];
//             arrayNum[x] = arrayNum[i];
//             arrayNum[i] = swap;
//         }
//     }
// }
// console.log(arrayNum);
