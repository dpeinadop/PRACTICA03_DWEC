// FUNCIONES DEPENDIENTE DE LA PÁGINA

window.onload = testlista;

//Creamos un variable que nos irá rellenando el array
var elementos_Lista = create();

// Esta función nos limpia input del formulario.
function limpiarDatos() {
    document.getElementById("numero").value = "";
}

//Función para añadir elementos al array
function aniadirNumero(numero) {
    var error = document.getElementById("error");
    var lista = document.getElementById("lista");
    var numero = document.getElementById("numero").value;
    error.innerHTML = "";
    try {
        add(elementos_Lista, numero);
        lista.innerHTML = toString(elementos_Lista);
    } catch (err) {
        error.innerHTML = err;
    }
}

// Función que borra los elementos del array
function borrarNumero() {
    var error = document.getElementById("error");
    var lista = document.getElementById("lista");
    error.innerHTML = "";
    try {
        poll(elementos_Lista);
        lista.innerHTML = toString(elementos_Lista);
    } catch (err) {
        error.innerHTML = err;
    }
}