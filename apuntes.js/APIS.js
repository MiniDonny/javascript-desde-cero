/*API = Es una estructura que hace una conexión con una base de datos que te devuelve lo solicitado.
    Y no se pueden hacer cambios sin un post*/ 

/*API = un JSON = Base de datos = Ejemplos pokeapi.co // rickandmortyapi.com*/


/*COMO HACER UNA PROMESA*/
fetch('https://pokeapi.co/api/v2/pokemon/ditto') /*fetch = es una peticion */
    .then(response => response.json()) /*then = es una promesa resuelta que se pasa a un json */
    .then(data => console.log(data)) /*data = es */
    .catch(error => console.log(error)) /*catch = devuelve el error*/




/*OTRA MANERA DE HACER UNA PROMESA*/
const getPokemon =async () => {

    try{
    const res =await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data =await res.json
    console.log(data)
    }
    catch{
        /*para devolver el error*/
    }
} /*Async = asincronica = se va a resolver de forma distinta al tiempo de js, es decir tiene que esperar a que se resuelva
para seguir con la lectura del codigo.
    Await = esperar hasta que termine de leer o resolver para pasar a la siguiente linea*/
    /*Si no se termina de resolver deja una "promesa pendiente"*/




/*OTRA MANERA DE HACER UNA PROMESA*/
    function promise(){
        new Promise((resolve, reject) =>  {
            try{ /*Se resuelve el codigo con el resolve, si encuentra un error, para el codigo y lo pasa al reject*/

                //CODIGO
                //
                //
                //
                resolve('Se resolvio')
            }

            catch{ /*Devuelve el error con el reject*/
                reject(console.error())
            }

        });
    }



/*EJEMPLO DE UNA API EN HTML*/

/* 
--------- HTML ----------
<body>
    <article class="contenedor">
        <img href="#"></img>
        <h3></h3>
        <p></p>
    </article>
    </body>

---------- JS -----------------
const contenedort = documento.querySelector('#contenedor');

const getPokemon =async () =>{

    for(let i = 1; i<5; i++){

        const response =await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data =await resonse.json()
        console.log(data)

        contenedor.innerHTML += ` <article>
            <img src="data.sprites.front_default}" alt="ditto"></img>
            <h3>${data.name}</h3>
            <p>${data.id}</p>
        </article>`
    }
}
getPokemon();    

*/

/*prox class
    -repaso metodos
    -promesas fetch async
    -DOM
    -Consumiendo una API
*/