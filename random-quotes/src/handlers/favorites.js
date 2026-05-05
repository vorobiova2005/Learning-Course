import {favoriteBtn} from "../../index.js";

function toggleFavorite(quote, btn, container){
    quote.isFavorite = !quote.isFavorite
    toggleFavoriteBtnIcon(quote.isFavorite, btn)
    if (quote.isFavorite) {
        showFavoriteCard(quote, container);
    } else{
        removeFavoriteCard(quote.id);
    }
}

function handleFavorite(isFavorite){
    showFavoriteBtn(favoriteBtn);
    toggleFavoriteBtnIcon(isFavorite)
}

function toggleFavoriteBtnIcon(isFavorite){
    favoriteBtn.classList.toggle('fa', isFavorite);
    favoriteBtn.classList.toggle('far', !isFavorite);
}

function showFavoriteBtn(){
    favoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBtn(){
    favoriteBtn.style.display = 'none';

}

function removeFavoriteQuote (quote){
    quote.isFavorite = false
    removeFavoriteCard(id);
    const currentQuote = document.querySelector(`[data-current-quote-id]`);
    const currentQuoteId = currentQuote.dataset.currentQuoteId;
    if (id === currentQuoteId) {
        toggleFavoriteBtnIcon(true)
    }
}
function showFavoriteCard(quote, container){
    const {id, text, author} = quote;
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.dataset.quoteId = id;
    favoriteCard.innerHTML = `
        <p>${text}</p>
        <p class="author">${author}</p>  
       <i id="remove-favorite-btn" class="fa fa-star star-icon remove-btn"></i>
        `;
    container.appendChild(favoriteCard);

    const removeBtn = favoriteCard.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => removeFavoriteQuote(quote));
    }




function removeFavoriteCard(id){
    const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
    card && card.remove();
}

export {
    handleFavorite,
    toggleFavorite,
    hideFavoriteBtn,
}
