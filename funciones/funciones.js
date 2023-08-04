//Ejercicio1
function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! ¡Bienvenido/a!`);
  }

//Ejercicio2
function multiplicar(num1, num2) {
    return num1 * num2;
  }


//Ejercicio3
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }


//Ejercicio4
function calcularPrecio(precio, cantidad) {
    let precioTotal = precio * cantidad;
  
    if (cantidad >= 20) {
      precioTotal *= 0.8; 
    } else if (cantidad >= 10) {
      precioTotal *= 0.9; 
    }
  
    return precioTotal;
  }


//Ejercicio5
function esMayorDeEdad(edad) {
    const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    return mensaje;
  }
  



//Ejercicio6
function calcularImpuesto(ingresoAnual) {
    let impuesto;
  
    if (ingresoAnual <= 10000) {
      impuesto = ingresoAnual * 0.1; 
    } else if (ingresoAnual <= 20000) {
      impuesto = ingresoAnual * 0.15; 
    } else {
      impuesto = ingresoAnual * 0.2; 
    }
  
    return impuesto;
  }



//Ejercicio7
function verificarDia(numero) {
    let mensaje;
  
    switch (numero) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        mensaje = "Es un día laboral";
        break;
      case 6:
      case 7:
        mensaje = "Es fin de semana";
        break;
      default:
        mensaje = "El número ingresado no pertenece a un día de la semana";
        break;
    }
  
    return mensaje;
  }