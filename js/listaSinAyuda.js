//Nos creamos una constante para el fijar el número máximo de elementos
const MAX_ELEM_LISTA = 5;

/*Crea una lista con el array ya instanciado con el número de elementos máximos.
Recorremos toda la lista e inicializamos cada elemento con NaN*/
function create() {
    var lista = [];
    for (var i = 0; i < MAX_ELEM_LISTA; i++) {
        lista[i] = NaN;
    }
    return lista;
}

//Comprueba que el índice introducido no esté fuera de rango de elementos ocupados 
function fueraRango(lista, posicion) {
    return (posicion > (size(lista) - 1) || posicion < 0);
}

//Devuelve true o false en función de si la lista está vacía
function isEmpty(lista) {
    return (isNaN(lista[0]));
}

//Devuelve true o false en función de si la lista está llena.No se tienen en cuenta los NaN
function isFull(lista) {
    return !isNaN(lista[lista.length - 1]);
}

//Devuelve el número de elementos reales de la lista, es decir sin contar los NaN
function size(lista) {
    var tamanio = 0;
    while (tamanio < MAX_ELEM_LISTA && !isNaN(lista[tamanio])) { //Recorremos para saber cuál es el primer elemento NaN
        tamanio++;
    }
    return tamanio;
}

//Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista una vez añadido.
function add(lista, elemento) {
    if (isNaN(elemento)) {
        throw "El elemento no es un Number";
    }
    if (isFull(lista)) {
        throw "La lista está llena";
    }
    var tamanio = size(lista);
    lista[tamanio] = elemento
    return tamanio + 1;
}

//Añade un nuevo elemento en la posición especificada en la lista. Devuelve el tamaño de la lista una vez añadido
function addAt(lista, posicion, elemento) {
    var auxiliar;
    if (isNaN(elemento)) {
        throw "El elemento no es un Number";
    }
    if (isFull(lista)) {
        throw "La lista está llena";
    }
    if (posicion > size(lista) || posicion < 0) {
        throw "El índice está fuera de los límites de la lista";
    }
    if (size(lista) == 0) {
        lista[0] = elemento;
    } else {
        for (var i = size(lista) - 1; i >= posicion; i--) {
            lista[i + 1] = lista[i];
        }
        lista[i + 1] = elemento;
    }
    return size(lista);
}

//Devuelve el elemento de la lista de la posición indicada
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
        for (var i = 0; i < size(lista) - 1; i++) {
            texto = texto + lista[i] + " - ";
        }
        texto = texto + lista[i];
    }
    return texto;
}

//Devuelve la posición del elemento indicado. Si el elemento no está en la lista devuelve -1.
function indexOf(lista, elemento) {
    var posicion = -1;
    var i = 0;
    if (isNaN(elemento)) {
        throw "El elemento no es un Number";
    }
    while (posicion == -1 && i < size(lista)) {
        if (lista[i] == elemento) {
            posicion = i;
        }
        i++;
    }
    return posicion;
}

//Devuelve la posición del elemento indicado comenzando por el final. Si el elemento no está en la lista devuelve -1.
function lastIndexOf(lista, elemento) {
    var posicion = -1;
    var i = size(lista) - 1;
    if (isNaN(elemento)) {
        throw "El elemento no es un Number";
    }
    while (posicion == -1 && i >= 0) {
        if (lista[i] == elemento) {
            posicion = i;
        }
        i--;
    }
    return posicion;
}

//Devuelve el máximo número de elementos que podemos tener en la lista
function capacity(lista) {
    return MAX_ELEM_LISTA;
}

//Vacía la lista
function clear(lista) {
    for (i = 0; i < MAX_ELEM_LISTA; i++) {
        lista[i] = NaN;
    }
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
    return lista[size(lista) - 1];
}

//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(lista, posicion) {
	var elemento;
	if (fueraRango(lista, posicion)) {
        throw "El índice está fuera de los límites de la lista";
    }
	elemento = lista[posicion];
	for (i = posicion; i < size(lista)-1; i++) {
		lista[i] = lista[i + 1];
	}
	lista[i] = NaN;
	return elemento;
 }




//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso contrario
function removeElement(lista, elemento) {
    var borrado = false;
    var indice = indexOf(lista, elemento);
    if (indice > -1) {
        remove(lista, indice);
        borrado = true;
    }
    return borrado;
}

//Elimina el último elemento de la lista. Salta una excepción cuando la lista se encuentra vacía.
function poll(lista) {
    if (isEmpty(lista)) {
        throw "La lista se encuentra vacía. No se pueden quitar elementos";
    }
    return remove(lista, size(lista)-1);
}

//Reemplaza el elemento de la lista indicado por el índice. Devuelve el elemento que estaba anteriormente en la lista.
function set(lista, elemento, posicion) {
    var elementoAnterior;
    if (fueraRango(lista, posicion)) {
        throw "Indice fuera del rango de la lista";
    }
    elementoAnterior = lista[posicion];
    lista[posicion] = elemento;
    return elementoAnterior;
}


// función de testeo 
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
