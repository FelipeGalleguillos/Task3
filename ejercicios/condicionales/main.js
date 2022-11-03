//Ej1-3////////////////////////////////////////
let num1 = 1;
let num2 = 2;

if (num1 == num2) {
    console.log("numeros iguales");
} else {
    if (num1 > num2) {
        console.log("primer numero mayor que segundo numero");
    }else{
        console.log("segundo numero mayor que primer numero");
    }
}
// //Ej4////////////////////////////////////////
// let primero = 2;
// let segundo = 4;
// let tercero = 6;

// if (primero < segundo && primero < tercero) {
//     console.log("el primer numero es el mas pequeño");
// }
// if (segundo < primero && segundo < tercero) {
//     console.log("el primer numero es el mas pequeño");
// }
// if (tercero < segundo && tercero < primero) {
//     console.log("el primer numero es el mas pequeño");
// }
// //Ej5////////////////////////////////////////////////
// let persona1 = {
//     nombre: "Pedro",
//     edad: 25,
//     altura: 1.70
// }
// let persona2 = {
//     nombre: "Juan",
//     edad: 70,
//     altura: 1.59
// }

// if (persona1.altura > persona2.altura) {
//     console.log(persona1.nombre +" es mas alto (" + persona1.altura + " mts)");
// }else{
//     console.log(persona2.nombre +" es mas alto (" + persona2.altura + " mts)");
// }

// if (persona1.edad > persona2.edad) {
//     console.log(persona1.nombre +" tiene mas edad (" + persona1.edad + " mts)");
// }else{
//     console.log(persona2.nombre +" tiene mas edad (" + persona2.edad + " mts)");
// }
// //Ej6//////////////////////////////////////////////////////
// let nombre = prompt("Ingrese su nombre");
// let edad = prompt("ingrese su edad");
// let altura = prompt("ingrese su altura(mts)");
// let vision = prompt(" de 1 a 10 ingrese su puntuacion de vision");
// console.log(nombre);
// console.log(edad);

// if (edad >= 18 && altura > 1.50 && vision >= 8) {
//     console.log(nombre + " esta capacitado para conducir");
// }else{
//     console.log(nombre + " no esta capacitado para conducir")
// }
// //Ej7////////////////////////////////////////////////////
// let nombre1 = prompt("ingrese su nombre");
// let pase = prompt("ingrese su pase(vip/normal)");
// let entrada = prompt("posee entrada?(s/n)");

// if (nombre1 == "Felipe" || pase == "vip") {
//     alert("Bienvenido! tienes entrada libre")
// }else{
//     if (entrada == "s") {
//         let usarEntrada = prompt("desea usar su entrada?(s/n)");
//         if (usarEntrada == "s") {
//             alert("Bienvenido!");
//         }else{
//             alert("Que tenga un buen dia");
//         }
//     }else{
//         let comprar = prompt("desea comprar una entrada?(s/n)");
//         if (comprar == "s") {
//             let dinero = prompt("Ingrese dinero disponible");
//             if (dinero >= 1000) {
//                 alert("Entrada vendida. Bienvenido!");
//             }else{
//                 alert("Saldo insuficiente");
//             }
//         }else{
//             alert("Que tenga un buen dia");
//         }
//     }
// } 
// //Ej8////////////////////////////////////////////////////
// let numeroIncognita = 6;
// let intentos = 0;
// let win = false;
// let numeroIngresado = 0;

// while (intentos < 3 || win == false) {
//     numeroIngresado = prompt("adivina el numero(1-10) intentos restantes: " + (3-intentos));
//     if (numeroIngresado == numeroIncognita) {
//         alert("has adivinado! el numero era " + numeroIncognita);
//         win = true;
//     }else{
//         if (numeroIngresado > numeroIncognita) {
//             alert("el numero es menor...");
//         }else{
//             alert("el numero es mayor...");
//         }
//     }
//     intentos ++;
// }
// //Ej9//////////////////////////////////////////////////////
// let edad1 = prompt("ingresa tu edad");

// if (edad > 100) {
//     console.log("Enserio tienes esa edad?");
// }else{
//     if (edad > 45) {
//         console.log("eres un anciano");
//     }else{
//         if (edad >= 19) {
//             console.log("eres un joven mayor");
//         }else{
//             if (edad > 13) {
//                 console.log("eres un adolescente");
//             } else {
//                 console.log("eres un infante");
//             }
//         }
//     }
// }
// //Ej10//////////////////////////////////////////////////////
// let jugador1 = prompt("ingresa una opcion(piedra/papel/tijeras)");
// let jugador2 = prompt("ingresa una opcion(piedra/papel/tijeras)");

// if (jugador1 != "piedra" || jugador1 != "papel" || jugador1 != "tijeras" || jugador2 != "piedra" || jugador2 != "papel" || jugador2 != "tijeras") {
//     console.log("Ingreso incorrecto, sin trampas!");
// }else{
//     if (jugador1 == "piedra" && jugador2 == "tijera" ) {
//         console.log("jugador 1 gana");
//     }
//     if (jugador2 == "piedra" && jugador1 == "tijera" ) {
//         console.log("jugador 2 gana");
//     }
//     if (jugador1 == "papel" && jugador2 == "piedra" ) {
//         console.log("jugador 1 gana");
//     }
//     if (jugador2 == "papel" && jugador1 == "piedra" ) {
//         console.log("jugador 2 gana");
//     }
//     if (jugador1 == "tijera" && jugador2 == "papel" ) {
//         console.log("jugador 1 gana");
//     }
//     if (jugador2 == "tijera" && jugador1 == "papel" ) {
//         console.log("jugador 2 gana");
//     }
//     if (jugador1 == jugador2) {
//         console.log("empate");
//     }
// }
// //Ej11//////////////////////////////////////////////////////
// let color = prompt("ingrese un color");

// switch (color) {
//     case "blanco" || "negro":
//         console.log("falta de color");
//         break;

//     case "verde":
//         console.log("color de la naturaleza");
//         break;

//     case "azul":
//         console.log("el color del agua");
//         break;

//     case "amarillo":
//         console.log("el color del sol");
//         break;

//     case "rojo":
//         console.log("el color del fuego");
//         break;

//     case "marron":
//         console.log("el color de la tierra");
//         break;        

//     default:
//         console.log("excelente eleccion, no lo habiamos pensado");
//         break;
// }
// Ej12/////////////////////////////////////////////////////////
// let operacion = prompt("ingrese operacion(suma/resta/multiplicacion/division)");
// let numero1 = prompt("ingrese el primer numero");
// let numero2 = prompt("ingrese el segundo numero");


// if (operacion == "suma") {
//     numero1=parseInt(numero1);
//     numero2=parseInt(numero2);
//     console.log("la suma es: " + (numero1 + numero2));
// }
// if (operacion == "resta") {
//     numero1=parseInt(numero1);
//     numero2=parseInt(numero2);
//     console.log("la resta es: " + (numero1 - numero2));
// }
// if (operacion == "multiplicacion") {
//     numero1=parseInt(numero1);
//     numero2=parseInt(numero2);
//     console.log("la multiplicacion es: " + (numero1 * numero2));
// }
// if (operacion == "division") {
//     numero1=parseInt(numero1);
//     numero2=parseInt(numero2);
//     console.log("la division es: " + (numero1 / numero2));
// }
// //Ej13///////////////////////////////////////////////////////////
// let nombre2 = prompt("ingrese su nombre");
// let apellido = prompt("ingrese su apellido");
// let nacionalidad = prompt("ingrese su nacionalidad");
// let run = prompt("ingrese su run");
// let fechaN = prompt("ingrese fecha de nacimiento");
// let numeroDoc = prompt("ingrese numero de documento");

// alert(nombre2 + "\n" + apellido + "\n" + nacionalidad + "\n" + run + "\n" + fechaN + "\n" + numeroDoc);
// let valido = prompt("son los datos correctos?(s/n)");

// if (valido == "s") {
//     let dni = {
//         nombre: nombre2,
//         apellido: apellido,
//         nacionalidad: nacionalidad,
//         run: run,
//         fecha_nac: fechaN,
//         numero_doc: numeroDoc
//     }

//     console.table(dni);
//     console.log("registro exitoso");
// }else{
//     console.log("intentelo en 1 mes");
// }