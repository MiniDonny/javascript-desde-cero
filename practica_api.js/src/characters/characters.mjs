const characters =async () => {

    const contenedor = document.querySelector('#contenedor')

    for(let i = 1; i < 51; i++){ /*recorre todo los 51 pokemones */

            try{
            const resolve =await fetch(`https://pokeapi.co/api/v2/pokemon?limit=51&offset=0`)
            const data =await resolve.json()
            console.log(data)
            contenedor.innerHTML +=`
                <div class="carta">
                    <h3 class="nombre">${data.name}</h3>
                    <img src="${data.sprites.front_default}" alt="">
                    <p class="type_pokemon">${data.past_types}</p>
                </div>
                `
            
            }
            
            catch(error){
                console.log(error)// para devolver el error
            }
        }
}
export { characters } 