//Ejercicio 1

function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
  } else {
    console.log("El primer número no es mayor que el segundo.");
  }
}

//Ejercicio 2
function comparacionNumeros(numero1, numero2){
  if (numero1 == != numero2){
    console.log("los numeros son iguales");
  } else{
    console.log("Los números son diferentes");
  }
}

//Ejercicio 3
function numeroMasGrande(numero1, numero2){
  if (numero1 >= numero2){
    console.log("El primer numero es mayor que el segundo")
  } else{
    console.log("Los números son iguales");
  }
}


//Ejercicio 4
function encontrarMenor(numero1, numero2, numero3) {
  let menor = numero1;
  
  if (numero2 < menor) {
    menor = numero2;
  }
  
  if (numero3 < menor) {
    menor = numero3;
  }
  
  console.log("El número más pequeño es: " + menor);
}



//Ejercicio 5
var persona1 = {
    nombre: "Juan",
    edad: 30,
    altura: 180
  };
  
var persona2 = {
    nombre: "Maria",
    edad: 25,
    altura: 170
  };
  
  if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es la más alta.");
  } else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es la más alta.");
  } else {
    console.log("Ambas personas tienen la misma altura.");
  }

  if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor.");
  } else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mayor.");
  } else {
    console.log("Ambas personas tienen la misma edad.");
  }


//Ejercicio 6

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Ingresa tu nombre: ', function(nombre) {
  rl.question('Ingresa tu edad: ', function(edad) {
    rl.question('Ingresa tu altura en cm: ', function(altura) {
      rl.question('Ingresa tu visión en una escala del 1 al 10: ', function(vision) {

        edad = parseInt(edad);
        altura = parseInt(altura);
        vision = parseInt(vision);

        if (edad >= 18 && altura > 150 && vision >= 8) {
          console.log(nombre + ', estás capacitado para conducir.');
        } else {
          console.log(nombre + ', no estás capacitado para conducir.');
        }

        rl.close();
      });
    });
  });
});




//Ejercicio 9

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Ingresa tu edad: ', function(edad) {
  
  edad = parseInt(edad);

  if (edad >= 0 && edad <= 12) {
    console.log('Eres un infante.');
  } else if (edad >= 13 && edad <= 18) {
    console.log('Eres un adolescente.');
  } else if (edad >= 19 && edad <= 45) {
    console.log('Eres un mayor joven');
  } else if (edad > 45 && edad < 100) {
    console.log('Eres un anciano.');
  } else if (edad > 100) {
    rl.question('¿Estás seguro de que tienes ' + edad + ' años? (si o no): ', function(respuesta) {
      if (respuesta.toLowerCase() === 'si') {
        console.log('Wow, eres muy longevo/a.');
      } else {
        console.log('Entendido, gracias por tu respuesta.');
      }
      rl.close();
    });
  } else {
    console.log('Edad no válida.');
  }

  rl.close();
});


//Ejercicio 10

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Jugador 1, ingresa tu jugada (Piedra, Papel o Tijeras): ', function(jugada1) {
  
  rl.question('Jugador 2, ingresa tu jugada (Piedra, Papel o Tijeras): ', function(jugada2) {
    
    jugada1 = jugada1.toLowerCase();
    jugada2 = jugada2.toLowerCase();

    
    if (jugada1 === 'piedra' || jugada1 === 'papel' || jugada1 === 'tijeras') {
      if (


//Ejercicio 11
function mostrarMensaje(color) {
  switch (color) {
    case 'Blanco':
    case 'Negro':
      console.log('Falta de color.');
      break;
    case 'Verde':
      console.log('El color de la naturaleza.');
      break;
    case 'Azul':
      console.log('El color del agua.');
      break;
    case 'Amarillo':
      console.log('El color del sol.');
      break;
    case 'Rojo':
      console.log('El color del fuego.');
      break;
    case 'Marrón':
      console.log('El color de la tierra.');
      break;
    default:
      console.log('Excelente elección, no lo teníamos pensado.');
  }
}

mostrarMensaje('Rojo'); 
mostrarMensaje('Gris'); 


//Ejercicio 12
function calcularOperacion(valor1, valor2, operacion) {
  let resultado;
  
  switch (operacion) {
    case 'suma':
      resultado = valor1 + valor2;
      console.log('El resultado de la suma es: ' + resultado);
      break;
    case 'resta':
      resultado = valor1 - valor2;
      console.log('El resultado de la resta es: ' + resultado);
      break;
    case 'multiplicacion':
      resultado = valor1 * valor2;
      console.log('El resultado de la multiplicación es: ' + resultado);
      break;
    case 'division':
      if (valor2 === 0) {
        console.log('ERROR: No se puede dividir entre 0.');
      } else {
        resultado = valor1 / valor2;
        console.log('El resultado de la división es: ' + resultado);
      }
      break;
    default:
      console.log('Operación no válida.');
  }
}

calcularOperacion(5, 2, 'suma'); 
calcularOperacion(10, 3, 'resta'); 
calcularOperacion(4, 6, 'multiplicacion'); 
calcularOperacion(8, 0, 'division'); 
calcularOperacion(12, 4, 'potencia');

//Ejercicio 13

function ingresarDatosDNI() {
  let nombre = prompt('Ingrese su nombre:');
  let apellido = prompt('Ingrese su apellido:');
  let fechaNacimiento = prompt('Ingrese su fecha de nacimiento:');
  let numeroDocumento = prompt('Ingrese su número de documento:');
  
  console.log('--- Datos ingresados ---');
  console.log('Nombre: ' + nombre);
  console.log('Apellido: ' + apellido);
  console.log('Fecha de nacimiento: ' + fechaNacimiento);
  console.log('Número de documento: ' + numeroDocumento);
  
  let confirmacion = prompt('¿Son correctos los datos ingresados? (Sí/No)').toLowerCase();
  
  if (confirmacion === 'sí' || confirmacion === 'si') {
    let dni = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
      numeroDocumento: numeroDocumento
    };
    
    console.log('--- Registro exitoso ---');
    console.table(dni);
    console.log('¡Registro exitoso!');
  } else {
    console.log('Vuelva a intentarlo en 1 mes.');
  }
}

ingresarDatosDNI();