export default function character_details(character){
    return `
    <div class="details_card">
        <div class="details_card-image">
            <img src="${character?.image}" alt="">
        </div>
        <div class="details_card-content">
            <h3 class="details_card-title">Title</h3>
            <p class="details_card-description">Description</p>
        </div>
    </div>
    `
}