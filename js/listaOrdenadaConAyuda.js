const MAX_ELEM_LISTA = 5;

// Crea una lista con el array ya instanciado con el número de elementos máximos
function create() {
    var lista = [];
    return lista;
}

// Devuelve true o false en función de si la lista está vacía
function isEmpty(lisat) {
    var vacia = false;
    if (size(lista) === 0) {
        vacia = true;
    }
    return vacia;
}
//Devuelve true o false en función de si la lista está llena
function isFull(lista) {
    var llena = false;
    if (size(lista) === MAX_ELEM_LISTA) {
        llena = true;
    }
    return llena;
}
// Comprueba que este dentro del rango el índice introducido
function fueraRango(posicion) {
    var exceso = false;
    if (posicion > (MAX_ELEM_LISTA - 1) || posicion < 0) {
        exceso = true;
    }
    return exceso;
}

//Devuelve el número de elementos de la lista.
function size(lista) {
    return lista.length;
}

//Añade un nuevo elemento a la lista manteniendo la relación de orden. Devuelve el tamaño de la list una vez añadido
function add(lista, elem) {
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento introducido no es un número";
    }
    if (!isFull(lista)) {
        var index = 0;
        var insertado = false;
        if (size(lista) == 0) {
            lista[0] = elem;
        } else {
            do {
                if (index == lista.length) {
                    insertado = true;
                } else if (elem < lista[index]) {
                    insertado = true;
                    //movemos hacia la deracha todos los elementos
                    for (var i = lista.length; i > index; i--) {
                        lista[i] = lista[i - 1];
                    }
                } else {
                    index++;
                }
            } while (!insertado);
            lista[index] = elem;
        }
    } else {
        throw "La lista está llena. No puedes añadir más elementos";
    }
    return size(lista);
}

//Elimina el último elemento de la lista
function poll(lista) {
    var elemento = 0;
    if (!isEmpty(lista)) {
        elemento = lista.shift();
    } else {
        throw "La lista se encuentra vacía. No se pueden quitar elementos";
    }
    return elemento;
}

//Devuelve el elemento de la lista de la posición indicada
function get(lista, index) {
    var valor;
    if (fueraRango(index)) {
        throw "Indice fuera del rango de la lista";
    } else if (lista[index] !== undefined) {
        valor = lista[index];
    } else {
        throw "La posición " + index + " está vacía.";
    }
    return valor;
}

//Devuelve la cola en formato cadena. El delimitador de elementos será “-“.
function toString(lista) {
    var texto = "";
    var i;
    if (!isEmpty(lista)) {
        for (i = 0; i < size(lista) - 1; i++) {
            if (lista[i] >= 0) {
                texto += (lista[i] + " - ");
            } else {
                texto += ("(" + lista[i] + ") - ");
            }
        }
        if (lista[i] >= 0) {
            texto += (lista[i]);
        } else {
            texto += ("(" + lista[i] + ")");
        }
    }
    return texto;
}

//Devuelve la posición del elemento indicado. Si el elemento no está en la list devuelve -1.
function indexOf(lista, elemento) {
    var position = -1;
    elem = parseInt(elem);
    if (!isNaN(elem)) {
        if (!isEmpty(lista)) {
            position = lista.indexOf(elem);
        }
    } else {
        throw "El elemento no es un número";
    }
    return position;
}

//Devuelve la posición del elemento indicado comenzando por el final. Si el elemento no está en la list devuelve -1.
function lastIndexOf(lista, elemento) {
    var position = -1;
    elem = parseInt(elem);
    if (!isNaN(elem)) {
        if (!isEmpty(lista)) {
            position = lista.lastIndexOf(elem);
        }
    } else {
        throw "El elemento no es un número";
    }
    return position;
}

//Devuelve el máximo número de elementos que podemos tener en la lista.
function capacity(lista) {
    var tamanio = MAX_ELEM_LISTA;
    return tamanio;
}

//Vacía la lista.
function clear(lista) {
    lista.splice(0, (MAX_ELEM_LISTA));
    return lista;
}

//Devuelve el primer elemento de la lista
function firstElement(lista) {
    var elemento;
    var i = 0;
    if (!isEmpty(lista)) {
        elemento = lista[0];
    } else {
        throw "La lista está vacía";
    }
    return elemento;
}

//Devuelve el último elemento de la lista
function lastElement(lista) {
    var elemento;
    var index = size(lista) - 1;
    if (!isEmpty(lista)) {
        elemento = lista[index];
    } else {
        throw "La list está vacía";
    }
    return elemento;
}

//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
function remove(lista, index) {
    var elemento;
    if (fueraRango(index)) {
        throw "Indice fuera del rango de la lista";
    } else if (lista[index] !== undefined) {
        elemento = lista.splice(index, 1);
    } else {
        throw "La posición " + index + " está vacía";
    }
    return elemento;
}

//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso contrario.
function removeElement(lista, elemento) {
    var borrado = false;
    var index;
    if (indexOf(lista, elemento) === -1) {
        throw "No se ha encontrado el valor " + elemento;
    }
    while (indexOf(lista, elemento) !== -1) {
        index = indexOf(lista, elemento);
        remove(lista, index);
        toString(lista);
        borrado = true;
    }
    return borrado;
}


function testlista(lista) {
    try {
        var lista = create();
        console.log("add(lista, 2): " + add(lista, 2));
        console.log("add(lista, 1): " + add(lista, 1));
        try {
            console.log("add(lista, f): " + add(lista, "f"));
        } catch (err) {
            console.log("add(lista, f) Exception -> " + err);
        }
        console.log("add(lista, 150): " + add(lista, 150));

        console.log("add(lista, 18): " + add(lista, 18));
        console.log("add(lista, 3): " + add(lista, 3))

        console.log("toString(lista): " + toString(lista));
        try {
            console.log("add(lista, 150): " + add(lista, 150));
        } catch (err) {
            console.log("add(lista, 150): Exception -> " + err);
        }
        console.log("remove(lista, 2): " + remove(lista, 2));
        console.log("toString(lista): " + toString(lista));
        try {
            console.log("remove(lista, 7): " + remove(lista, 7));
        } catch (err) {
            console.log("remove(lista, 7) Excepction -> " + err);
        }
        try {
            console.log("removeElement(lista, 78): " + removeElement(lista, 78));
        } catch (err) {
            console.log("removeElement(lista, 78) Excepction -> " + err);
        }
        console.log("removeElement(lista, 1): " + removeElement(lista, 1));
        console.log("toString(lista): " + toString(lista));
        console.log("add(lista, 150): " + add(lista, 150));
        console.log("get(lista, 3): " + get(lista, 3));
        try {
            console.log("get(lista, -1): " + get(lista, -1));
        } catch (err) {
            console.log("get(lista, -1) Excepction -> " + err);
        }
        console.log("insdexOf(lista, 150): " + indexOf(lista, 150));
        try {
            console.log("insdexOf(lista, a): " + indexOf(lista, "a"));
        } catch (err) {
            console.log("insdexOf(lista, a) Excepction -> " + err);
        }



        console.log("capacity(lista): " + capacity(lista));
        console.log("lastElement(lista): " + lastElement(lista));
        console.log("firstElement(lista): " + firstElement(lista));
        console.log("toString(lista): " + toString(lista));
        console.log("clear(lista): " + clear(lista));
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