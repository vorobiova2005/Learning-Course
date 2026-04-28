import {handleFavorite} from "./favorites.js";
import {generateRandomInt} from "../utils.js";

function handleQuote(quotes, setCurrentQuote){
    const randomQuote = choseRandomQuote(quotes)
    setCurrentQuote(randomQuote);
    displayQuote(randomQuote)
}

function displayQuote(quote){
    const {text, author, isFavorite} = quote
    const quoteElement = document.getElementById("quote-text");
    const authorElement = document.getElementById("quote-author");
    quoteElement.textContent = text;
    authorElement.textContent = author;
    handleFavorite(isFavorite)
}

function choseRandomQuote(quotes) {
    const randomIndex = generateRandomInt(quotes.length);
    return quotes [randomIndex];
}

export {
    handleQuote,
}