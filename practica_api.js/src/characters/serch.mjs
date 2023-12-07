document.addEventListener('DOMContentLoaded', () => {
const search =async (value) => {

        const contenedor = document.querySelector('#contenedor');

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        const data = await res.json()

        data.results.forEach(async pokemon => {
            const res =await fetch(pokemon.url)
            const data2 =await res.json()
            console.log(data2.name)

            if (contenedor) {

            contendor.innerHTML += `
            <div class="carta">
                <h3 class="nombre">${data2.name}</h3>
                <img src="${data2.sprites.front_default}" alt="">
                <p class="type_pokemon">${data2.past_types}</p>
            </div>
            `
            } else {
                console.error('Elemento #contenedor no encontrado.');
            }

        })

            
    }
    search();

});