/*-------------------------------------API--------------------------------------------------------*/

/*API = Es una estructura que hace una conexión con una base de datos que te devuelve lo solicitado.
Y no se pueden hacer cambios sin un post

API = un JSON = Base de datos = Ejemplos pokeapi.co // rickandmortyapi.com*/




/*---------------------------COMO HACER PROMESAS------------------------------------------------*/

/*PROMESA => Una promesa es una peticion que no sabemos si se va a resolver*/

/*Fetch (.then .cath) // es una promesa => le pasamos una url o endpoint y realiza la peticion. 
                        puede ser un POST(pasar datos) o un GET(traer datos)*/

/*Then => es una peticion */

/*.json => es otra promesa */

fetch('https://pokeapi.co/api/v2/pokemon/ditto') /*Hacemos la peticion. Puede ser una url o un endpoint*/

    .then(response => response.json()) /*es el resultado de la anterior promesa y pasa a ser otra 
                                            promesa resuelta que se pasa a un json */

    .then(data => console.log(data)) /*data => capturo el resultado de la promesa anterior "resolve.json" */

    .catch(error => console.log(error)) /*catch = devuelve el error*/
    

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

/*OTRA MANERA DE HACER UNA PROMESA*/
const getPokemon =async () => {

    try{
    const resolve =await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data =await resolve.json
    console.log(data)
    }
    catch(error){
        /*para devolver el error*/
    }
}

const getPokemon2 =async () => {
    const contenedor = document.querySelector('#contenedor-pokemon')
    for(let i = 1; i< 51; i++){ /*recorre todo los 51 pokemones */
            try{
            const resolve =await fetch('https://pokeapi.co/api/v2/pokemon/${1}') /* ${1} => para iniciar desde el 1*/
            const data =await resolve.json
            console.log(data)
            contenedor.innerHTML +=`
            <div class="card">

                <p class="heading">
                    <img src=${data.sprites.front_default} alt="">
                </p>

                <p>
                nombre
                </p>

                <p>
                ${data.nombre}
                </p>
                
            </div>
            `
            }
            catch(error){
                // para devolver el error
            }
        }
} 

/*Async = asincronica = se va a resolver de forma distinta al tiempo de js, es decir tiene que esperar a que se resuelva
                        para seguir con la lectura del codigo.*/

/*Await = esperar hasta que termine de leer o resolver para pasar a la siguiente linea 
        Si no se termina de resolver deja una "promesa pendiente"*/




/*-----------------------------------FORMAS DE MANIPULAR UNA API-----------------------------------*/

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

