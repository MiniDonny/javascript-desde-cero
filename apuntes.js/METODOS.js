/*Join = agarra un array, junta todos los valores y los une en un nuevo string*/ /*MAS USADO*/
    const elementos = ["manzana", "plátano", "naranja"];
    const cadena = elementos.join(", ");
    console.log(cadena);
/*Split separa un string o cadena y devuelve un nuevo array con el separador que indicamos*/ /*MAS USADO*/
    const mensaje = "Hola, mundo!";
    const subcadenas = mensaje.split(", ");
    console.log(subcadenas);
    
/*Map = modifica y retortna en una nueva variable*/ /*MAS USADO*/
    let array1 = [1,2,3,4];
    let arrayDos = array1.map(element => {
        console.log(element)
    });

/*forEach = mofica y retorna en la misma variable, es decir mofifica el mismo array*/ /*MAS USADO*/
    let array2 = [1,2,3,4];
    let arrayCuatro = array1.forEach(element => {
        console.log(element)
    });

/*Filter = filtra según el parametro pasado o la condición dada, lo retorna en un nuevo array.
Si tenes mas de un mismo valor,devuelve todos.*/ /*MAS USADO*/
    let arrayFilter = [1,2,3,4];
    let filtro = arrayFilter.filter(n => n == 5);
    console.log(filtro);

/*Find = Busca el valor pasado por la condicion. Devuelve el primer valor que encuentre q cumpla la funcion,
no importa si hay mas del mismo valor.*/ /*MAS USADO*/
    let search = [1,"hola",2,"hola",3,4,5];
    let find = search.find(n => n == 5);
    console.log(find);
    /*Otro ejemplo*/
    let find2 = search.find(n => n == "hola");

/*indexof = Empieza del primero al ultimo.
devuelve el indice del valor que queremos encontrar. Si hay de un mismo valor,
devuelve el primero que encuentra*/
    console.log(search.indexOf(5));
/*lastIndexof = Empieza desde el ultimo al primero.
devuelve el indice del valor que queremos encontrar. Si hay de un mismo valor,
devuelve el primero que encuentra*/
    console.log(search.lastIndexOfindexOf(5));

/*Reduce = agarra los valores y los va sumando*/
    let arrayPrueba = [1,2,3,4];
    let contador = arrayPrueba.reduce((n, acumulador)=>{          
        return acumulador + n
    });
    console.log(contador);
    /*Tambien funciona asi
    let arrayPrueba = [1,2,3,4];
    let contador = arrayPrueba.reduce((n, acumulador) => return acumulador + n) */

/*Include = le pasamos una condicion y si lo encuentra al valor, devuelve true, caso contrario, false*/ /*MAS USADO*/
    console.log(arrayPrueba.includes(3)); /*true*/
    console.log(arrayPrueba.includes(155)); /*false*/

/*Trim = Elimina espacios al principio y al final de la caneda de texto*/ /*MAS USADO*/
    let input = "   HOLA MUNDO COMO ESTAS  ";
    console.log(input.trim()); /*al principio y final*/
    console.log(input.trimEnd()); /*al final*/
    console.log(input.trimStart()); /*al principio*/

/*replace = reemplaza un valor por otro */
    console.log(input.replace('MUNDO', 'PLANETA')) /*El primero es que cambiamos y el segundo por cual lo cambiamos*/


