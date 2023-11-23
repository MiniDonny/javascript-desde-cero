/*Con DOM podemos modificar el html a gusto o como sea necesario.Por ende puedo tomar una etiqueta,
ya sea contenedor o no y modificar lo que contenga.*/

document /*Esto seria todo mi HTML*/

/*METODOS DE DOCUMENT*/
/*para seleccion de etiqueta*/
document.querySelectorAll('') /*recibo todo el document, y devuelve un array de todos los elementos que cumplan la condicion.*/

document.querySelector('') /*entre parentesis le pasamos nombres de etiquetas(etiqueta), id(#) y clase(.)*/

document.getElementById('') /*Recibe solo el id sin el # */

document.getElementsByClassName('') /*Solo recibe una clase sin el . */

/*MODIFICADORES*/

/*EJEMPLO 
    const contenedor = document.querySelector('#contenedor') // supongamos q es un div

puedo hacer lo siguiente:*/
contenedor.innerHTML = '<h1>Contenedor</h1>'
/*SON LO MISMO*/
document.querySelector('#contenedor') .innerHTML = '<h1>Contenedor</h1>'


contenedor.innerText = "contenido" /*Solo recibe texto tal cual esta. no lee etiquetas*/


contenedor.insertAdjacentHTML(/*Posicion , texto*/) /*Inserta HTML*/

/*EVENTOS*/

/*EJEMPLO
button.addEventListener('Tipo de evento', funcion del evento)*/
button.addEventListener('click', e=> console.log('me Clikeaste')) /*MAS USADO*/
button.addEventListener('key', e=> console.log('me Clikeaste')) /*MAS USADO*/
button.addEventListener('blur', e=> console.log('me Clikeaste')) /*MAS USADO*/
button.addEventListener('focus', e=> console.log('me Clikeaste'))




/*
window.onscroll() => { / -> Cada vez que se hace escroll lo detecta y lo llama
    console.log(window.scrollY) / -> muestra en numero las cooredenadas
    console.log(document.documentElement.clientHEight) / -> muestra los pixeles de la pagina segun el scroll
}
*/