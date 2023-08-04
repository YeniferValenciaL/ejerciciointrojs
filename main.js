//Ejercicio 1//
let miNombre = "Yenifer";
//Ejercicio 2//

let miApellido = "Valencia";
//Ejercicio 3//

let miEdad = 21;
//Ejercicio 4//

let miMascota = "Myla";
//Ejercicio 5//

let edadMascota = 1
//Ejercicio 6//

console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);
//Ejercicio 7//

let nombreCompleto = miNombre + " " + miApellido;

//Ejercicio 8//

let textoPresentacion = miNombre + " " + miApellido + " " + miEdad + " " + miMascota + " " + edadMascota;

//Ejercicio 9//

let sumaEdades = miEdad + edadMascota;
console.log (sumaEdades);

let restaEdades = miEdad - edadMascota;
console.log (sumaEdades);
let productoEdades = miEdad % edadMascota;
console.log (sumaEdades);
let divisionEdades = miEdad / edadMascota;

//ejercicio 10//

let alumno = {
    nombre: "Yenifer",
    apellido: "Valencia",
    edad: 21,
    nacionalidad: "Colombiana",
    ocupacion: "Estudiante"
};
//console.table(alumno);//

//ejercicio 11//

let mascota = {
    nombre: "Myla",
    raza: "Criolla",
    edad: 1,
    tamaño: "Mediana",
    colorPelo: "Blanco"
};
console.table(mascota);

//Ejercicio 12//

let frutas = ["Manzana", "Pera", "Banano", "Mango", "Fresa"];
console.log(frutas);
console.log(frutas[0]);

//Ejercicio14

let numeros = [2 , 5 , 9, 10, 22];
console.log(numeros);
console.log(numeros[2]);

//Ejercicio15

let familia = [{
    padre: "Guillermo",
    madre: "Rubiela",
    hermanoMayor: "Pedro",
    hermanaMenor: "Jessica",
    sobrinaMayor: "Celeste"
}];
console.log(familia);

//Ejercicio16

let textoAleatorio
    textoAleatorio = "Yo soy una" + " " + frutas[1] + " y mi numero favorito es el " + " " + numeros[3] + " y me llamo " + familia;
    console.log(textoAleatorio);

//Ejercicio17

let myEdad = prompt("Introduce tu edad");

let edadCompañero = prompt("Introduce la edad de tu compaeñero");

let compararEdad = myEdad === edadCompañero;
let edadMayor = myEdad > edadCompañero;
let edadMenor = myEdad < edadCompañero;

console.log("a. Tengo la misma edad de mi compañero:", compararEdad);
console.log("b. Soy mayor que mi compañero:", edadMayor);
console.log("c. Soy menor que mi compañero:", edadMenor);

//Ejercicioq18

let edad = prompt("Introduce la edad por favor");

let altura = prompt("Introduce tu altura por favor");

let puedeSubir = edad > 6;
let puedeSubirMin = altura > 120;

console.log("Puede subir a la atraccion", puedeSubir);
console.log("puede subir a la atraccion", puedeSubirMin);

//Ejercicio19

let tipoPase = prompt("Introduzca su tipo de pase (VIP, NORMAL, or LIMITADO):");

let saldo = parseFloat(prompt("Introduzca su balance:"));


let puedePasar = (tipoPase === "VIP") || (saldo > 1000);

// Displaying the result
console.log("La persona puede pasar:", puedePasar);





