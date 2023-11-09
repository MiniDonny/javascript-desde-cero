function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
    let count = 0;
    phrase = phrase.toLowerCase();
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === 'a' || phrase[i] === 'e' || phrase[i] === 'i' || phrase[i] === 'o' || phrase[i] === 'u') {
            count++;
        }
    }
    return count;
}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
    while(dividendo % divisor !== 0){
        divisor++;
        console.log(divisor)
    }
    return divisor;
}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
    let i = 1;
    while( i <= 100){

        if( i === x){
            return "El numero X es:" + " " + i
        }
        i++;
    }
    
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
    let i = 0;
    let suma = 0;
    while(i <= num){
        suma += i;
        i++;
    }
    return suma;
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
    return parseInt(num,2)
    /* 1 0 0 1 1 0 0 1 1  /  1 1 0 0 1 1 0 0 1
    decimal += num*base**ind 
    
    */
}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇

    //Comprieba si n es igual o mas chico que 0
    if (n <= 0) {
        return 0;
    }
    // Comprueba si n es igual a 1 o 2, en cuyo caso retorna 1.
    else if (n === 1 || n === 2) {
        return 1;
    }
    // Caso general: utiliza recursión para calcular Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2).
    else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
if (numero <= 1) {
    return numero + " no es primo.";
  } else if (numero === 2) {
    return numero + " es primo.";
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return numero + " no es primo.";
      }
    }
    return numero + " es primo.";
  }

}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
    return cadena.split("").reverse().join("")
    /*reverse() solo en arrays */
}

module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}