// Ejercicio con un condicional

let edad = prompt("Hola. Por favor, ingrese su edad :");

while (isNaN(edad) || edad == " " || edad < 1) {
    edad = prompt("Por favor, ingrese un número válido para su edad :");
}

if (edad < 18) {
    alert("Eres menor de edad.");
} else if (edad >= 18 && edad <= 25) {
    alert("Eres un adulto joven.");
} else if (edad > 25 && edad <= 65) {
    alert("Eres un adulto.");
} else {
    alert("Eres un anciano.");
}

alert("Ahora (NADA QUE VER) probemos esta calculadora. Dale en aceptar cuando estes listo !");

// Función para realizar una operación matemática

function realizarOperacion(operando1, operando2, operador) {

    switch (operador) {
        case '+':
            return operando1 + operando2;
        case '-':
            return operando1 - operando2;
        case '*':
            return operando1 * operando2;
        case '/':
            return operando1 / operando2;
        default:
            return NaN;
    }
}

function obtenerOperacion() {
    let operacion = prompt("Ahora ingresa la operacion que deseas realizar. Ej : (+, -, *, /)");

    while (!['+', '-', '*', '/'].includes(operacion)) {
        operacion = prompt("La operacion no es valida. Por favor, ingresa una operación válida! Ej : (+, -, *, /)");
    }
    return operacion;
}

// Función para realizar el cálculo y mostrar el resultado

function calcular() {
    let operando1, operando2;

    parseInt(prompt("Ingresa el N°1 para relizar la operacion :"));

    // Solicito operando1 hasta que se ingrese un número válido
    while (isNaN(operando1)) {
        operando1 = parseInt(prompt("Por favor. Ingresa el N°1 ( valido ) para relizar la operacion :"));
    }

    parseInt(prompt("Ahora ingresa el N°2 :"));

    // Solicito operando2 hasta que se ingrese un número válido
    while (isNaN(operando2)) {
        operando2 = parseInt(prompt("Por favor. Ahora ingresa el N°2  ( valido ) :"));
    }

    const operacion = obtenerOperacion();

    const resultado = realizarOperacion(operando1, operando2, operacion);

    if (isNaN(resultado)) {
        alert("Operación no válida.");
    } else {
        alert(`El resultado de la operación ${operando1} ${operacion} ${operando2} es = ${resultado}`);
    }
}

calcular();