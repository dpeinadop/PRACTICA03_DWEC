//Nos creamos una constante para el fijar el número máximo de elementos
const MAX_ELEMEN_LISTA = 5;

// Funciones que nos determinarán el estado de la lista: capacidad, tamaño, si está vacía o no.

// Crea una lista con el array ya instanciado con el número de elementos máximos
function create() {
    var lista = [];
    return lista;
}

//Comprueba que el índice introducido no esté fuera de rango de elementos ocupados 
function fueraRango(lista, posicion) {
    return (posicion > (lista.length - 1) || posicion < 0);
}

//Devuelve true o false en función de si la lista está vacía
function isEmpty(lista) {
    return (lista.length == 0);
}

//Devuelve true o false en función de si la lista está llena
function isFull(lista) {
    return (lista.length == MAX_ELEMEN_LISTA);
}

//Devuelve el número de elementos de la lista.
function size(lista) {
    return lista.length;
}

//Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.
function add(lista, elemento) {
    elemento = parseInt(elemento);
    if (isNaN(elemento)) {
        throw "El elemento no es un Number";
    }
    if (isFull(lista)) {
    	throw "La lista está llena";
    }
    lista.push(elemento);
    return lista.length;
}

function addORDENADA(lista, elemento) {
    var auxiliar;
	if (isNaN(elemento)) {
        throw "El elemento no es un Number";
    }
    if (isFull(lista)) {
    	throw "La lista está llena";
    }
	if (lista.length == 0){
		lista[0] = elemento;
	}else{
		var posicion = -1;
		do{
			posicion++;
		}while(lista[posicion] <= elemento && posicion < lista.length);
		
		for (var i = lista.length - 1 ; i >= posicion; i--){
			lista[i+1] = lista[i];
		}
		lista[i+1] = elemento;
	}
 	return lista.length;
}

//Añade un nuevo elemento en la posición especificada en la lista. Devuelve el tamaño de la lista una vez añadido.
function addAt(lista, posicion, elemento) {
    if (isNaN(elemento)) {
        throw "El elemento no es un Number";
    }
    if (isFull(lista)) {
    	throw "La lista está llena";
    }
	if (posicion > lista.length || posicion < 0) {
        throw "El índice está fuera de los límites de la lista";
    }
    lista.splice(posicion, 0, elemento);
    return lista.length;
}

//Devuelve el elemento de la lista de la posición indicada.
function get(lista, posicion) {
    if (fueraRango(lista, posicion)) {
        throw "El índice está fuera de los límites de la lista";
    }
    return lista[posicion];
}

//Devuelve la lista en formato cadena. El delimitador de elementos será “-“.
function toString(lista) {
    var texto = "";
    if (!isEmpty(lista)) {
        var length_1 = lista.length - 1;
        for (var i = 0; i < length_1; i++) {
            texto = texto + lista[i] + " - ";
        }
        texto = texto + lista[i];
    }
    return texto;
}

//Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.
function indexOf(lista, elemento) {
    if (isNaN(elemento)) {
    	throw "El elemento no es un Number";
    }
    return lista.indexOf(elemento);
}

//Devuelve la posición del elemento indicado comenzando por el final. Si el elemento no está en la lista devuelve -1.
function lastIndexOf(lista, elemento) {
    if (isNaN(elemento)) {
    	throw "El elemento no es un Number";
    }
    return lista.lastIndexOf(elemento);
}

//Devuelve el máximo número de elementos que podemos tener en la lista.
function capacity(lista) {
    return MAX_ELEMEN_LISTA;
}

//Vacía la lista
function clear(lista) {
	lista.splice(0, (MAX_ELEMEN_LISTA));
}

//Devuelve el primer elemento de la lista
function firstElement(lista) {
    if (isEmpty(lista)) {
    	throw "La lista está vacía.";
    }
    return lista[0];
}

//Devuelve el último elemento de la lista
function lastElement(lista) {
    if (isEmpty(lista)) {
    	throw "La lista está vacía.";
    }
    return lista[lista.length - 1];
}

//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(lista, posicion) {
    if (fueraRango(lista, posicion)) {
        throw "El índice está fuera de los límites de la lista";
    }
    return lista.splice(posicion, 1);
}

//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso contrario
function removeElement(lista, elemento) {
    var borrado = false;
    var posicion;
    if (isNaN(elemento)) {
    	throw "El elemento no es un Number";
    }
    posicion = indexOf(lista, elemento);
    if (posicion > -1){
    	lista.splice(posicion, 1);
    	borrado = true;
    }
    return borrado;
}

//Elimina el último elemento de la lista. Salta una excepción cuando la lista se encuentra vacía.
function poll(lista){
    if (isEmpty(lista)){ 		
        throw "La lista se encuentra vacía. No se pueden quitar elementos";
    }
    return lista.pop(); 
}  


function set(lista, elemento, posicion) {
    if (isNaN(elemento)) {
    	throw "El elemento no es un Number";
    }
	if (fueraRango(lista, posicion)) {
        throw "Indice fuera del rango de la lista";
    } 
    return lista.splice(posicion, 1, elemento);
}

function testlista() {
    try {
    	var lista = create();
        console.log("add(lista, 2): " + add(lista, 2));
        console.log("add(lista, 1): " + add(lista, 1));
		try {
            console.log("addAt(lista, 3,250): " + addAt(lista, 4, 250));
        } catch (err) {
            console.log("addAt(lista, 3,250): Exception -> " + err);
        }
        try {
            console.log("add(lista, f): " + add(lista, "f"));
        } catch (err) {
            console.log("add(lista, f) Exception -> " + err);
        }
        console.log("add(lista, 150): " + add(lista, 150));
        try {
            console.log("addAt(lista, 6, 103): " + addAt(lista, 6, 103));
        } catch (err) {
            console.log("addAt(lista, 6, 103): Exception -> " + err);
        }
        console.log("add(lista, 18): " + add(lista, 18));
        
        try {
            console.log("addAt(lista, 3, 9): " + addAt(lista, 3, 9));
        } catch (err) {
            console.log("addAt(lista, 3, 9): Exception -> " + err);
        }
        console.log("toString(lista): " + toString(lista));
        try {
            console.log("add(lista, 150): " + add(lista, 150));
        } catch (err) {
            console.log("add(lista, 150): Exception -> " + err);
        }
        console.log("set(lista, 50, 1): " + set(lista, 50, 1));
        console.log("set(lista, 20, 2): " + set(lista, 20, 2));
		console.log("toString(lista): " + toString(lista));
        console.log("remove(lista, 3): " + remove(lista, 3));
		console.log("toString(lista): " + toString(lista));
        try {
            console.log("remove(lista, -7): " + remove(lista, -7));
        } catch (err) {
            console.log("remove(lista, -7) Excepction -> " + err);
        }
		console.log("removeElement(lista, 50): " + removeElement(lista, 50));
        try {
            console.log("removeElement(lista, 78): " + removeElement(lista, 78));
        } catch (err) {
            console.log("removeElement(lista, 78) Excepction -> " + err);
        }
        try {
            console.log("removeElement(lista, 1): " + removeElement(lista, 1));
        } catch (err) {
            console.log("removeElement(lista, 1) Excepction -> " + err);
        }
        console.log("toString(lista): " + toString(lista));
        console.log("add(lista, 150): " + add(lista, 150));
        console.log("set(lista, 150,3): " + set(lista, 150, 3));
        try {
            console.log("set(lista, 150,6): " + set(lista, 150, 6));
        } catch (err) {
            console.log("set(lista, 150,6) Excepction -> " + err);
        }
        console.log("get(lista, 3): " + get(lista, 3));
        try {
            console.log("get(lista, 7): " + get(lista, 7));
        } catch (err) {
            console.log("get(lista, 7) Excepction -> " + err);
        }
        console.log("insdexOf(lista, 150): " + indexOf(lista, 150));
        try {
            console.log("insdexOf(lista, a): " + indexOf(lista, "a"));
        } catch (err) {
            console.log("insdexOf(lista, a) Excepction -> " + err);
        }

        console.log("lastIndexOf(lista, 150): " + lastIndexOf(lista, 150));
        try {
            console.log("lastIndexOf(lista, d): " + lastIndexOf(lista, "d"));
        } catch (err) {
            console.log("lastIndexOf(lista, d) Excepction -> " + err);
        }

        console.log("capacity(lista): " + capacity(lista));
        console.log("lastElement(lista): " + lastElement(lista));
        console.log("firstElement(lista): " + firstElement(lista));
        console.log("toString(lista): " + toString(lista));
        clear(lista);
        console.log("despues de clear(lista), lista: " + lista);
        try {
            console.log("lastElement(lista): " + lastElement(lista));
        } catch (err) {
            console.log("lastElement(lista) Excepction -> " + err);
        }
        try {
            console.log("firstElement(lista): " + firstElement(lista));
        } catch (err) {
            console.log("firstElement(lista) Excepction -> " + err);
        }

        console.log("toString(lista): " + toString(lista));
    } catch (err) {
        console.log(err);
    }
} 
