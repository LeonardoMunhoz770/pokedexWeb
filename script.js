document.addEventListener("DOMContentLoaded", function(event) { 

    for(let i = 1; i < 101; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/?limit=101`
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then((response) =>{
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

document.querySelector("#search").addEventListener("click", function(){
    let search = document.querySelector("#pokemon").value.toLowerCase();
    if(search.length == 0){
        location.reload()   
    }else{
    for(let i  = 1; i< 101; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/?limit=101`
        fetch(url, {
            method: "GET"
        }).then(response => response.json())
        .then((response) =>{
            const data = [response]
            if(data[0].name === search){
                let htmlPokemon = `
                <div class="containerPokemon">
                    <figure>
                        <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data[0].id}.svg" alt="">
                    </figure>
                    <div class="content" id="content">
                        <label>#${data[0].id}</label>
                        <h1>${data[0].name}</h1>
                        <label>${data[0].types[0].type.name}</label>
                    </div>
                </div>
                `
                document.getElementById("pokedex").innerHTML = htmlPokemon
            }else{
                console.log('não encontrei')
            }
        })
        }
    }
    
})
