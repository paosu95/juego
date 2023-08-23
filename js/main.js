const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");

/* Leemos la entrada del resultado */
const resultadoJuego = document.getElementById("resultado");

let jugador1Movimiento = null;
let jugador2Movimiento = null;
let turnoJugador = 1; // Inicia el turno con el Jugador 1

// Iniciamos el juego
piedraOpcion.addEventListener("click", () => {
    movimientoJugador('piedra');
});

papelOpcion.addEventListener("click", () => {
    movimientoJugador('papel');
});

tijeraOpcion.addEventListener("click", () => {
    movimientoJugador('tijera');
});

// Función para manejar el movimiento de ambos jugadores
function movimientoJugador(opcion) {
    if (turnoJugador === 1) {
        jugador1Movimiento = opcion;
        resultadoJuego.innerHTML = "Jugador 1 eligió " + opcion + ". Turno del Jugador 2...";
        turnoJugador = 2;
    } else if (turnoJugador === 2) {
        jugador2Movimiento = opcion;
        resultadoJuego.innerHTML = "Jugador 2 eligió " + opcion;
        compararMovimientos();
        turnoJugador = 1; // Reinicia el turno al Jugador 1
    }
}

function compararMovimientos() {
    if (jugador1Movimiento && jugador2Movimiento) {
        const comp = comparacion(jugador1Movimiento, jugador2Movimiento);
        if (comp === 1) {
            resultadoJuego.innerHTML += "<br>¡Jugador 1 gana!";
        } else if (comp === 2) {
            resultadoJuego.innerHTML += "<br>¡Jugador 2 gana!";
        } else {
            resultadoJuego.innerHTML += "<br>La partida es un empate.";
        }
        jugador1Movimiento = null;
        jugador2Movimiento = null;
    }
}



function comparacion(jugador1, jugador2){
    switch (jugador1+jugador2){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1; //gana
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2; //pierde
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeratijera':
            return 3; //empata
    }
}
const empezarDeNuevoBoton = document.getElementById("empezarDeNuevo");

empezarDeNuevoBoton.addEventListener("click", () => {
    reiniciarJuego();
});

function reiniciarJuego() {
    jugador1Movimiento = null;
    jugador2Movimiento = null;
    turnoJugador = 1;
    resultadoJuego.innerHTML = "¡Juego reiniciado! Esperando movimientos...";
}