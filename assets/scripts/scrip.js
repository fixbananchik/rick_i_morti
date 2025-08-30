import generate_character from "./generate.js"

function hadleResponse(data) {
    data.json().then(hadleJSON)
}

function hadleJSON(data) {
    console.log(data)
    for(let character of data.results){
        cardsContainer.insertAdjacentHTML("beforeend", generate_character(character))
    }
}

const cardsContainer = document.querySelector('.container')

fetch(`https://rickandmortyapi.com/api/character`)
.then(hadleResponse)