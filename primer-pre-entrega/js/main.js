// Ejercicio con un condicional
const edad = prompt("Ingrese su edad:");

if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}

// Ejercicio con un ciclo
const numero = 2;

for (let i = 0; i <= 20; i += 5) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} es igual a ${resultado}`);
}

// Simulador interactivo - Examen de matemáticas
function hacerPregunta(pregunta) {
    return prompt(pregunta);
}

function realizarExamen() {
    let puntaje = 0;

    for (let i = 1; i <= 5; i++) {
        const respuesta = hacerPregunta(`Pregunta ${i}: ¿Cuánto es 2 * ${i}?`);
        const respuestaCorrecta = 2 * i;

        if (parseInt(respuesta) === respuestaCorrecta) {
            puntaje++;
        }
    }

    return puntaje;
}

function mostrarResultado(puntaje) {
    if (puntaje >= 3) {
        alert(`Felicidades! Aprobaste con ${puntaje}/5.`);
    } else {
        alert(`Desaprobaste! Tu puntaje fue ${puntaje}/5.`);
    }
}

const puntajeObtenido = realizarExamen();
mostrarResultado(puntajeObtenido);