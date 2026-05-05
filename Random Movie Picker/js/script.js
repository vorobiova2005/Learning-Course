import { movies } from './data/movies.js';
import { title, genre, description, img, btn, nextbtn, prevbtn, viewcounter, genrebtn, toggleFavoriteBtn, favoritesContainer } from './dom.js';

let lastIndex = -1;
let currentIndex = -1;
let counter = 0;
let viewedMovies = [];
let filteredMovie = [...movies];
let selectedGenre = 'All';

toggleFavoriteBtn.disabled = true;

function renderMovie(movie){
    title.textContent = movie.title;
    genre.textContent = movie.genre;
    description.textContent = movie.description;
    img.src = movie.image;
    toggleFavoriteBtn.disabled = false;
    toggleFavoriteIcon(movie.isFavorite);
}

function updateViewCounter(){
    if (!viewedMovies.includes(currentIndex)) {
        counter++;
        viewedMovies.push(currentIndex);
        viewcounter.textContent = `You viewed ${counter} movies`;
    }
}

function toggleFavoriteIcon(isFavorite){
    toggleFavoriteBtn.classList.toggle('fa', isFavorite);
    toggleFavoriteBtn.classList.toggle('far', !isFavorite);
}

genrebtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectedGenre = btn.dataset.genre;
        filteredMovie = selectedGenre === 'All'
            ? [...movies]
            : movies.filter(movie => movie.genre === selectedGenre);
        currentIndex = 0;
        viewedMovies = [];
        counter = 0;
        viewcounter.textContent = `You viewed ${counter} movies`;

        if (filteredMovie.length > 0){
            renderMovie(filteredMovie[currentIndex]);
        }
    });
});


function getRandomMovie() {
    if (filteredMovie.length === 0) return;
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * filteredMovie.length);
    } while (randomIndex === currentIndex);
    currentIndex = randomIndex;
    renderMovie(filteredMovie[currentIndex]);
    updateViewCounter();
}

function nextFilm(){
    if (filteredMovie.length === 0) return;
    currentIndex = (currentIndex + 1) % filteredMovie.length;
    renderMovie(filteredMovie[currentIndex]);
    updateViewCounter();
}

function prevFilm(){
    if (filteredMovie.length === 0) return;
    currentIndex = (currentIndex - 1 + filteredMovie.length) % filteredMovie.length;
    renderMovie(filteredMovie[currentIndex]);
    updateViewCounter();
}


function showFavoriteCard(movie){
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.dataset.id = movie.id;
    favoriteCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <p>${movie.title}</p>
        <p class="genre">${movie.genre}</p>
        <p class="description">${movie.description}</p>
        <i class="fa fa-star star-icon"></i>
    `;
    const starIcon = favoriteCard.querySelector('.star-icon');
    starIcon.addEventListener('click', () => {
        const movieToRemove = movies.find(m => m.id === movie.id);
        if (movieToRemove) {
            movieToRemove.isFavorite = false;
        }
        favoriteCard.remove();
        const currentMovie = filteredMovie[currentIndex];
        if (currentMovie && currentMovie.id === movie.id) {
            toggleFavoriteIcon(false);
        }
    });
    favoritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(id){
    document.querySelectorAll('.favorite-card').forEach(card => {
        if (card.dataset.id === id) {
            card.remove();
        }
    });
}

function toggleFavorite(){
    if (currentIndex === -1) return;
    const currentMovie = filteredMovie[currentIndex];
    currentMovie.isFavorite = !currentMovie.isFavorite;
    toggleFavoriteIcon(currentMovie.isFavorite);
    if (currentMovie.isFavorite) {
        showFavoriteCard(currentMovie);
    } else {
        hideFavoriteCard(currentMovie.id);
    }
}

btn.addEventListener("click", getRandomMovie);
nextbtn.addEventListener("click", nextFilm);
prevbtn.addEventListener("click", prevFilm);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);