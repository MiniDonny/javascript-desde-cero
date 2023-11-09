function primerElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el primer elemento
    // tu código:
    return arg[0];
}

function ultimoElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el ultimo elemento
    // tu código aqui:
    return arg[arg.length -1];
}

function nuevoArray(arg){
    //dado el array pasado por parametro retorna su longitud
    // tu código aqui:
    return arg.length;
}

function changeArray(arr){
    //dado el array pasado por parametro, cambia el valor del primero elemento por 'Aprendiendo' y
    //el ultimo elemento por 'array'
    //retorna el nuevo valor
    // tu código aqui:
    arr[0] = 'Aprendiendo';
    arr[arr.length - 1] = 'array';
    return arr;
}

function primerasCondicionales(arg){
    // pasados los array por parametros tendras que devolver según lo que corresponda:
    // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
    // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
    // longitud de array menor que 3 retornar: 'Este array es menor a 3'
    // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
    // tu código aqui:
    if (arg.length === 0) {
        return 'Este array no contiene elementos';
      } else if (arg.length > 3) {
        return 'Este array es mayor a 3';
      } else if (arg.length === 3) {
        return 'Este array es igual a 3';
      } else {
        return 'Este array es menor a 3';
      }
}

function sumandoEnUno(arg){
    // dado el array de numeros enteros pasado por parametro, a cada elemento del array
    // tienes que sumarle 1.. ejemplo: [4 , 5, 6] -> [5 , 6, 7] 
    // tu código aqui:
    let resultado = arg.map((element) => element + 1);
    return resultado;
    /*let argActual = arg.reduce(callback(1,1[0[arg]]))
    return argActual*/
}

function valorMaximo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más alto y devolverlo
    //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
    // Tu codigo:
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i]; 
        }
    }
    return max;
}

function valorMinimo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más bajo y devolverlo
    //ejemplo -> [ 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 2
    // Tu codigo:
    if (arr.length === 0){
        return null;
    }
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function cantPares(arr){
    //Se para un array de enteros, tienes que iterar por los elementos y contar la cantidad de numeros que son pares
    // devolver la cantidad de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
    // Tu codigo:
    let contadorPares = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
        contadorPares++; // Incrementa el contador si el número es par
        }
    }
    return contadorPares;
}

function eliminarDuplicado(arr){
    // Se para un array de enteros, tienes que iterar por los elementos y eliminar los duplicados, y devolver el array nuevo sin duplicado.
    // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
    // Tu codigo:
    const nuevoArray = arr.filter((element, index, self) => {
        // El método filter se asegura de que solo se incluyan elementos en el nuevo array
        // si su índice es igual al índice de la primera aparición en el array original.
        return self.indexOf(element) === index;
    });
    
    return nuevoArray;
}

function enOrden(arr, ascendente = true){
    //Se para un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:
    // El método sort ordena el array de forma predeterminada en orden lexicográfico.
  // Si ascendente es false, invertimos el orden para ordenar de mayor a menor.
    arr.sort((a, b) => (ascendente ? a - b : b - a));
    return arr;
}

function dosEnUno(arr1, arr2){
    //Escribe una función que reciba dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
    //Tu codigo:
    // return arr1.concat(arr2);
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
}

function matrizTranspuesta(matriz){
    //Escribe una función que reciba una matriz (array de arrays) y devuelva la matriz transpuesta, es decir, intercambiando filas por columnas.
    //Tu codigo:
    // Obtenemos el número de filas y columnas en la matriz original.
    const filas = matriz.length;
    const columnas = matriz[0].length;
    // Creamos una nueva matriz para almacenar la matriz transpuesta.
    const matrizTranspuesta = [];
    // Iteramos a través de las columnas.
    for (let j = 0; j < columnas; j++) {
        // Creamos una nueva fila para cada columna.
        const nuevaFila = [];
        // Iteramos a través de las filas y copiamos los elementos de la columna actual a la nueva fila.
        for (let i = 0; i < filas; i++) {
        nuevaFila.push(matriz[i][j]);
        }
        // Agregamos la nueva fila a la matriz transpuesta.
        matrizTranspuesta.push(nuevaFila);
    }
    return matrizTranspuesta;
}

module.exports = {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales,
    valorMaximo,
    valorMinimo,
    cantPares,
    eliminarDuplicado,
    enOrden,
    dosEnUno,
    matrizTranspuesta,
}