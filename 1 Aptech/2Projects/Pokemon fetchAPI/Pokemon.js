let pokemonList = document.getElementById('pokemonList');


async function fetchPokemonList() {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let data = await response.json();
    data = data.results;
    data.map((pokemon) => {
        pokemonList.innerHTML += `
            <option value="${pokemon.name}">${pokemon.name}</option>
        `
    })
}
fetchPokemonList()

let pokemonRow = document.getElementById('pokemonRow');

pokemonList.addEventListener('change', async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList.value}`);
    let data = await response.json();
    console.log(data);
    pokemonRow.innerHTML = `
            <div class="col-4">
                <img src="${data.sprites.front_default}" width="100%" alt="" id="pokemonimage" class="img-fluid"/>
            </div>
             <div class="col-8 py-5">
                <h1 class="display-3 text-capitalize">${data.name}</h1>
                 <ol>
                    ${data.moves.slice(0,5).map((pokemonMove)=> `<li>${pokemonMove.move.name}</li>` ).join("")} 
                </ol>
            </div>
    `;
})