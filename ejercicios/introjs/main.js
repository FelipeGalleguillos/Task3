//Ej1-6//////////////////////////////////////////
let miNombre ="Felipe";
let miApellido ="Galleguillos";
let miEdad = 25;
let miMascota = "Firulais";
let edadMascota = 5;

console.log("Nombre:" + miNombre);
console.log("Apellido:" + miApellido);
console.log("Edad:" + miEdad );
console.log("Mascota:" + miMascota);
console.log("Edad mascota:" + edadMascota);
// //Ej7//////////////////////////////////////////
// let nombreCompleto = miNombre + " " + miApellido;
// console.log(nombreCompleto);
// //Ej8//////////////////////////////////////////
// let textoPresentacion = "Hola ni nombre es " + nombreCompleto + " tengo "
// + miEdad + ", Mi mascota se llama " + miMascota + " y tiene " + edadMascota + " años.";
// console.log(textoPresentacion);
// //Ej9//////////////////////////////////////////
// let sumaEdades = miEdad + edadMascota;
// let restaEdades = miEdad - edadMascota;
// let productoEdades = miEdad * edadMascota;
// let divisionEdades = miEdad / edadMascota;

// console.log("suma edades: " + sumaEdades);
// console.log("resta edades: " + restaEdades);
// console.log("producto edades: " + productoEdades);
// console.log("division edades: " + divisionEdades);
// //Ej10//////////////////////////////////////////
// let miNombre1 = prompt("ingrese nombre");
// let miApellido1 = prompt("ingrese apellido");
// let miEdad1 = prompt("ingrese edad");
// let miMascota1 = prompt("ingrese nombre mascota");
// let edadMascota1 = prompt("ingrese edad mascota");
// let nombreCompleto1 = miNombre1 + " " + miApellido1;
// let sumaEdades1 = miEdad1 + edadMascota1;
// let restaEdades1 = miEdad1 - edadMascota1;
// let productoEdades1 = miEdad1 * edadMascota1;
// let divisionEdades1 = miEdad1 / edadMascota1;

// let textoPresentacion1 = "Hola ni nombre es " + nombreCompleto1 + " tengo "
// + miEdad1 + ", Mi mascota se llama " + miMascota1 + " y tiene " + edadMascota1 + " años.";
// console.log(textoPresentacion1);
// console.log("suma edades: " + sumaEdades1);
// console.log("resta edades: " + restaEdades1);
// console.log("producto edades: " + productoEdades1);
// console.log("division edades: " + divisionEdades1);
// //Ej11//////////////////////////////////////////
// let alumno = {
//     nombre : "Felipe",
//     apellido: "Galleguillos",
//     edad: 25,
//     genero: "Masculino",
//     rut : "19660684-k"
// }

// console.table(alumno);
// console.log(alumno.nombre);
// console.log(alumno.apellido);
// console.log(alumno.edad);
// console.log(alumno.genero);
// console.log(alumno.rut);
// //Ej12//////////////////////////////////////////
// let mascota = {
//     nombre : "Firulais",
//     edad : "6",
//     raza : "pug",
//     color : "blanco",
//     dueño : "Felipe Galleguillos"
// }

// console.table(mascota);
// console.log(mascota.nombre);
// console.log(mascota.edad);
// console.log(mascota.raza);
// console.log(mascota.color);
// console.log(mascota.dueño);
// //Ej13//////////////////////////////////////////
// let frutas = ["manzana","pera","platano","piña","sandia"];

// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas[4]);
// //Ej14//////////////////////////////////////////
// let numeros = [2,4,6,8,10];

// console.log(numeros);
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
// //Ej15//////////////////////////////////////////
// let familia = ["papá","mamá","hermano","hermana","abuela"];

// console.log(familia);
// console.log(familia[0]);
// console.log(familia[1]);
// console.log(familia[2]);
// console.log(familia[3]);
// console.log(familia[4]);
// //Ej16//////////////////////////////////////////
// let textoAleatorio = " El otro dia mi " + familia[4] +
// " compró " + numeros[3] + " " + frutas[1]; 
// //Ej17//////////////////////////////////////////
// let edadPropia = prompt("ingrese su edad");
// let edadCompañero = prompt("ingrese edad compañero");

// let edadesIguales = false;
// let soyMayor = false;
// let soyMenor = false;

// if (edadPropia == edadCompañero) {
//     edadesIguales = true;
// }
// if (edadPropia > edadCompañero) {
//     soyMayor = true;
// }
// if (edadPropia < edadCompañero) {
//     soyMenor = true;
// }

// console.log("Mi edad es igual a la de mi compañero: " + edadesIguales );
// console.log("Mi edad es mayor a la de mi compañero: " + soyMayor );
// console.log("Mi edad es menor a la de mi compañero: " + soyMenor );
// //Ej18//////////////////////////////////////////
// edadPropia1 = prompt("ingrese su edad");
// let soyMayorDeEdad = false;

// if (edadPropia1 >= 18) {
//     soyMayorDeEdad = true;
// }

// console.log("Soy mayor de edad: " + soyMayorDeEdad );
// //Ej19//////////////////////////////////////////
// let edadPersona = prompt("ingrese edad de la persona");
// let alturaPersona = prompt("ingrese altura de la persona");
// let puedeSubir = false;

// if (edadPersona > 6) {
//     if (alturaPersona >= 120) {
//         puedeSubir = true;
//     }
    
// }

// console.log("Puede subir a la atracción: " + puedeSubir );
// //Ej20//////////////////////////////////////////
// let pase = prompt("Ingrese tipo de pase(VIP/NORMAL/LIMITADO)");
// let saldo = prompt("Ingrese saldo disponible");

// let puedePasar = false;

// if (pase == "VIP" || saldo > 1000) {
//     puedePasar = true;
// }

// console.log("La persona puede pasar: " + puedePasar);
