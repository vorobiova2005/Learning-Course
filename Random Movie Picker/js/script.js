import { movies } from './data/movies.js';
import { title, genre, description, img, btn, nextbtn, prevbtn, viewcounter, genrebtn, toggleFavoriteBtn, favoritesContainer } from './dom.js';



let lastIndex = -1;
let currentIndex = 0

let counter = 0
let viewedMovies = []

let filteredMovie = [...movies]
let selectedGenre = 'All'

genrebtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedGenre = btn.dataset.genre
        if (selectedGenre === 'All'){
            filteredMovie = [...movies]
        } else {
            filteredMovie = movies.filter(movie => movie.genre === selectedGenre)
        }

        currentIndex = 0
        viewedMovies = []
        counter = 0
        viewcounter.textContent = `You viewed ${counter} movies`

        if (filteredMovie.length > 0){
            const movie = filteredMovie[currentIndex];
            title.textContent = movie.title;
            genre.textContent = movie.genre;
            description.textContent = movie.description;
            img.src = movie.image;
        }
    })
})


function getRandomMovie() {
    if (filteredMovie.length === 0) return;

    let randomIndex = Math.floor(Math.random() * filteredMovie.length);
    while (randomIndex === currentIndex) {
        randomIndex = Math.floor(Math.random() * filteredMovie.length);
    }
    currentIndex = randomIndex;
    const movie = filteredMovie[currentIndex];
    title.textContent = movie.title;
    genre.textContent = movie.genre;
    description.textContent = movie.description;
    img.src = movie.image;

    if (!viewedMovies.includes(currentIndex)) {
        counter++;
        viewedMovies.push(currentIndex);
        viewcounter.textContent = `You viewed ${counter} movies`;
    }
}


function nextFilm(){
    if (filteredMovie.length === 0) return;

    currentIndex ++;
    if (currentIndex >= filteredMovie.length) {
        currentIndex = 0;
    }

    const movie = filteredMovie[currentIndex];
    title.textContent = movie.title;
    genre.textContent = movie.genre;
    description.textContent = movie.description;
    img.src = movie.image;

    if (!viewedMovies.includes(currentIndex)) {
        counter++;
        viewedMovies.push(currentIndex);
        viewcounter.textContent = `You viewed ${counter} movies`;
    }
}


function prevFilm(){
    if (filteredMovie.length === 0) return;

    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = filteredMovie.length - 1;
    }

    const movie = filteredMovie[currentIndex];
    title.textContent = movie.title;
    genre.textContent = movie.genre;
    description.textContent = movie.description;
    img.src = movie.image;

    if (!viewedMovies.includes(currentIndex)) {
        counter++;
        viewedMovies.push(currentIndex);
        viewcounter.textContent = `You viewed ${counter} movies`;
    }
}


function toggleFavorite(){
    const currentMovie = filteredMovie[currentIndex];
    currentMovie.isFavorite = !currentMovie.isFavorite

    if (currentMovie.isFavorite) {
        const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('favorite-card');
        favoriteCard.innerHTML = `
        <img src="${currentMovie.image}" alt="${currentMovie.title}">
        <p>${currentMovie.title}</p>
        <p class="genre">${currentMovie.genre}</p>
        <p class="description">${currentMovie.description}</p>
        `;
        favoritesContainer.appendChild(favoriteCard);
    } else{
        const favoriteCards = document.querySelectorAll('.favorite-card');
        favoriteCards.forEach(card => {
            if (card.textContent.includes(currentMovie.title)) {
                card.remove();
            }
        })
    }
}


btn.addEventListener("click", getRandomMovie);
nextbtn.addEventListener("click", nextFilm);
prevbtn.addEventListener("click", prevFilm);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);