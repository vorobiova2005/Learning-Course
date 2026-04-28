import quotes from "./src/data/quotes.js";
import {toggleFavorite, hideFavoriteBtn} from "./src/handlers/favorites.js";
import  {handleQuote} from "./src/handlers/quote.js";

const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("quote-favorite-btn");
hideFavoriteBtn(favoriteBtn);
favoriteBtn.addEventListener("click", () => toggleFavorite(currentQuote, favoriteBtn, favoritesContainer));

let currentQuote = null;


function setCurrentQuote(quote){
    currentQuote = quote;
}

const generateBtn = document.getElementById("random-quote-btn");
generateBtn.addEventListener("click", () => handleQuote(quotes, setCurrentQuote));


export {
    favoriteBtn,
}

