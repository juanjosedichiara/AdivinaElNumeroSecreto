/*let titulo = document.querySelector(`h1`);
//titulo.innerHTML = "Juego del Número Secreto";
//let parrafo = document.querySelector(`p`);
//parrafo.innerHTML = "Introduce un número:";
*/

let numeroMaximo = 10;
let numeroSecreto = 0;
let numerosSorteados = [];
let intentos = 1;

function intentoDeUsuario() {
    //alert("Click desde el Boton");
    verificarIntento();
}
//Funcion generica para colocar titulos y textos en html de forma optimizada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//Las funciones optimizan el código y evitan repeticiones
asignarTextoElemento('h1', "Juego del Número Secreto!!");
asignarTextoElemento('p', `Introduce un número entre 1 y ${numeroMaximo}`);

function generarNumeroSecreto() {

    let numSecreto = Math.floor(Math.random() * numeroMaximo + 1);
    console.log("Num Secreto " + numSecreto);


    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', "Ya se sortearon todos los números");
    } else {
        if (numerosSorteados.includes(numSecreto)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numSecreto);
            console.log(`Lista de Num Sorteados: ${numerosSorteados}`);

            return numSecreto;
        }
    }
    
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    /*
    console.log(numeroUsuario);
    console.log("El numero de usuario es "+ typeof(numeroUsuario));
    console.log(numeroSecreto);
    //console.log("El num secreto es " + typeof(numeroSecreto));
    console.log(numeroUsuario == numeroSecreto);
    */
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Adivinaste el número en ${intentos} ${(intentos == 1) ? "vez" : "veces"}! Felicitaciones!!`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if (numeroSecreto < numeroUsuario) {
            asignarTextoElemento('p', "No adivinaste. Prueba con un número menor");
        }
        if (numeroSecreto > numeroUsuario) {
            asignarTextoElemento('p', "No adivinaste. Prueba con un número mayor");
        }
        intentos++;
        limpiarCaja();
        return;
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector(`#valorUsuario`).value = "";
}

function valoresIniciales() {
    asignarTextoElemento('h1', "Juego del Número Secreto!!");
    asignarTextoElemento('p', `Introduce un número entre 1 y ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log("Numero Secreto: " + numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();

    //setea con los valores iniciales para un nuevo juego
    valoresIniciales();

    //deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

valoresIniciales();
