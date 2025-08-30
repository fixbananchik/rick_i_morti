function hadleResponse(data) {
    data.json().then(hadleJSON)
}

function hadleJSON(data) {
    
}

const contentContainer = document.querySelector('.container')

fetch(`https://rickandmortyapi.com/api/character`)
.then(hadleResponse)