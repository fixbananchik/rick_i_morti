export default function generate_character(character){
    return `
    <a class="link" href="./detail.html">
        <div class="card">
            <div class="card-image">
                <img class="card_img" src="${character?.image}" alt="">
            </div>
            <div class="card-content">
                <h3 class="card-title">${character?.name}</h3>
                <p class="card-description">${character?.origin.name}</p>
            </div>
        </div>
    </a>
        
    `
    
    
}

