document.addEventListener("DOMContentLoaded", function(event) { 

    for(let i = 0; i < 100; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/?limit=100`
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then((response) =>{
            console.log(response)
            let htmlPokemon = `
            <div class="containerPokemon">
                <figure>
                    <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${i}.svg" alt="">
                </figure>
                <div class="content" id="content">
                    <label>#${response.id}</label>
                    <h1>${response.name}</h1>
                    <label>${response.types[0].type.name}</label>
                </div>
            </div>`
            document.getElementById("pokedex").innerHTML +=  htmlPokemon
        })
        
    }
    })
;


