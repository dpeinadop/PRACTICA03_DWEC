//Nos creamos una constante para el fijar el número máximo de elementos

const MAX_ELEMEN_LISTA = 5;

// Funciones que nos determinarán el estado de la lista: capacidad, tamaño, si está vacía o no.

// Crea una lista con el array ya instanciado con el número de elementos máximos
function create(){
    var lista = [];
    return lista;
} 

//Comprueba que el índice introducido no esté fuera de rango
function fueraRango(posicion) {
    var exceso = false;
    if (posicion > (MAX_ELEMEN_LISTA - 1) || posicion < 0) {
        exceso = true;
    }
    return exceso;
}

//Devuelve true o false en función de si la lista está vacía
function isEmpty(lista) {
    return (lista.length === 0);
} 

//Devuelve true o false en función de si la lista está llena
function isFull(lista){
    return (lista.length === MAX_ELEMEN_LISTA);
} 

//Devuelve el número de elementos de la lista.
function size(lista) {
    return lista.length;
}

//Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.

function add(lista,elem){
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento introducido no es un número";
    }
    if (!isFull(lista)){
        lista.push(elem);
    } else {
        throw "La lista está llena. No puedes añadir más elementos";
    }
    return size(lista);
} 


//Añade un nuevo elemento en la posición especificada en la lista. Devuelve el tamaño de la lista una vez añadido.
function addAt(lista, posicion, valor) {
    var auxiliar = valor;
    if (fueraRango(posicion)) {
        throw "Indice fuera del rango de la lista";
    } else if (!isFull(lista) && ((lista[posicion - 1] !== undefined) || posicion === "0")) {
        lista.splice(parseInt(posicion), 0, valor);
    } else if (lista[posicion - 1] === undefined) {
        throw "No puede introducirse el valor en la posicion " + posicion + " por que hay huecos en la lista";
    } else {
        throw "No pueden introducirse valores nuevos por que la lista está llena.";
    }
    return size(lista);
}

//Devuelve el elemento de la lista de la posición indicada.
function get(lista, posicion) {
    var elemento;
    if (fueraRango(posicion)) {
        throw "Indice fuera del rango de la lista";
    } else if (lista[posicion] !== undefined) {
        elemento = lista[posicion];
    } else {
        throw "La posición " + posicion + " está vacía.";
    }
    return elemento;
}

//Devuelve la cola en formato cadena. El delimitador de elementos será “-“.
function toString(lista){
    var texto = "";
    if (!isEmpty(lista)){
        var length = size(lista);	
        for (var i=0; i<length-1;i++){
            texto = texto + lista[i] + " - ";
        } 		 		
        texto = texto + lista[i]; 		
    } 	
    return texto;
} 

//Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.
function indexOf(lista,elem){
    var position = -1;
    elem = parseInt(elem);
    if (!isNaN(elem)) {
        if (!isEmpty(lista)){
            position = lista.indexOf(elem);  		 		
        } 	
    } else{
        throw "El elemento no es un número";
    }
    return position;
} 

//Devuelve la posición del elemento indicado comenzando por el final. Si el elemento no está en la lista devuelve -1.
function lastIndexOf(lista,elem){
	var position = -1;
    elem = parseInt(elem);
    if (!isNaN(elem)) {
        if (!isEmpty(lista)){
            position = lista.lastIndexOf(elem);  		 		
        } 	
    } else{
        throw "El elemento no es un número";
    }
    return position;
}

//Devuelve el máximo número de elementos que podemos tener en la lista.
function capacity(lista){
    return MAX_ELEMEN_LISTA;
} 

//Vacía la lista
function clear(lista){
	lista = [];
//    var elemento = Number.NaN;
//    if (!isEmpty(lista)){
//        lista.splice(0, lista.length);	 		 		
//    } 	
} 

//Devuelve el primer elemento de la lista
function firstElement(lista){
    var primero;
    if (!isEmpty(lista)){
        primero = lista[0]; 		
    } else {
        throw "La lista está vacía.";
    }
    return primero;
} 

//Devuelve el último elemento de la lista
function lastElement(lista){
    var ultimo;
    if (!isEmpty(lista)){
        ultimo = lista[lista.length-1]; 			
    } else {
        throw "La lista está vacía.";
    }
    return ultimo;
} 

//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(lista, posicion) {
    var elemento;
    if (fueraRango(posicion)) {
        throw "Indice fuera del rango de la lista";
    } else if (lista[posicion] !== undefined) {
        elemento = lista.splice(posicion, 1);
    } else {
        throw "La posición " + posicion + " está vacía";
    }
    return elemento;
}

//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso contrario
function removeElement(lista, valor) {
    var borrado = false;
    var posicion;
    if (indexOf(lista, valor) === -1) {
        throw "No se ha encontrado el valor " + valor;
    }
    while (indexOf(lista, valor) !== -1) {
        posicion = indexOf(lista, valor);
        remove(lista, posicion);
        toString(lista);
        borrado = true;
    }
    return borrado;
}

//Reemplaza el elemento de la lista indicado por el índice. Devuelve el elemento que estaba anteriormente en la lista
function set(lista, valor, posicion) {
    var elementoAnterior;
    if (fueraRango(posicion)) {
        throw "Indice fuera del rango de la lista";
    } else if (lista[posicion] !== undefined) {
        elementoAnterior = lista.splice(posicion, 1, valor);
        toString(lista);
    } else {
        throw "No puede introducirse el valor en la posicion " + posicion + " por que está vacía";
    }
    return elementoAnterior;
}


function testlista(lista){
	
	    var lista = create(); 	
	    console.log("add(lista, 2): "+ add(lista, 2));
	    console.log("add(lista, 1): "+ add(lista, 1));
	    console.log("add(lista, 150): "+ add(lista, 150));
	    console.log("add(lista, 35): "+ add(lista, 35));
	    console.log("add(lista, 250): "+ add(lista, 250));
	    console.log("toString(lista): " + toString(lista));
		
    }

		//	console.log("La lista intruducida es: " + toString(lista)); 
//    console.log ("Capacidad: " + capacity(lista));
//    console.log("Es vacía: " + isEmpty(lista));
//    console.log("Longitud: " + size(lista));
//
//    
//
//    console.log ("La lista está llena: " + toString(lista));	 	
//    console.log ("El primer elemento de la lista es: " + firstElement(lista));
//    console.log ("El último elemento de la lista es: " + lastElement(lista));
//
//    console.log ("Está el número  35 en la lista: " + indexOf(lista,35));	 	
//    console.log ("Está el elemento 5: " + indexOf(lista,5));	 	
//    clear(lista);
//
//    
//
//    console.log ("Lista: " + toString(lista));	 	
} 
